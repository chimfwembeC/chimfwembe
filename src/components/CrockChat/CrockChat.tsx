import React, { useState, useRef, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Send, User, Bot, MessageCircle, X, ExternalLink } from "lucide-react";
import "./crockChat.css";
import fs from 'fs';
import path from 'path';

// Types
interface CrockChatProps {
  apiKey: string;
  widgetId: string;
  botName?: string;
  theme?: "light" | "dark" | "auto";
  logoUrl?: string;
  debug?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onMessage?: (message: Message) => void;
  onLeadSubmit?: (leadInfo: LeadInfo) => void;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "buttons" | "quickReplies";
  options?: Array<{
    text: string;
    value: string;
    action?: "url" | "message";
    url?: string;
  }>;
}

interface LeadInfo {
  name: string;
  email: string;
  useCase?: string;
  submittedAt: string;
}

interface Window {
  CrockChat?: {
    open: () => void;
    close: () => void;
    sendMessage: (msg: string) => void;
  };
}
// Main Component
const CrockChat: React.FC<CrockChatProps> = ({
  apiKey,
  widgetId,
  botName = "Crock AI Assistant",
  theme = "auto",
  logoUrl,
  debug = false,
  onOpen,
  onClose,
  onMessage,
  onLeadSubmit
}) => {
  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [sessionId, setSessionId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    theme === "auto" 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme
  );
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatMessageUrl = `https://n8n.yourserver.com/webhook/chat/${widgetId}`;
  const leadSubmissionUrl = `https://n8n.yourserver.com/webhook/leads/${widgetId}`;
  const mistralApiUrl = 'https://api.mistral.ai/v1/chat';
  
  // Debug logger
  const log = useCallback((message: string, data?: any) => {
    if (debug) {
      console.log(`%c[CrockChat]%c ${message}`, 'color: #6366f1; font-weight: bold', 'color: inherit', data || '');
    }
  }, [debug]);

  // Initialize session ID
  useEffect(() => {
    const storedSessionId = localStorage.getItem(`crockChat_session_${widgetId}`);
    if (storedSessionId) {
      setSessionId(storedSessionId);
      log("Restored session", storedSessionId);
    } else {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem(`crockChat_session_${widgetId}`, newSessionId);
      setSessionId(newSessionId);
      log("Created new session", newSessionId);
    }
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Theme listener
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleThemeChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? "dark" : "light");
      };
      
      mediaQuery.addEventListener("change", handleThemeChange);
      return () => {
        mediaQuery.removeEventListener("change", handleThemeChange);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [widgetId, theme, log]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (sessionId) {
      setMessages([
        {
          id: "welcome",
          text: `Hello! I'm ${botName}. How can I help you today?`,
          sender: "bot",
          timestamp: new Date(),
          type: "text"
        }
      ]);
      setUnreadCount(1);
      log("Added welcome message");
    }
  }, [sessionId, botName, log]);

  // Reset unread count when opening chat
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      if (onOpen) onOpen();
      log("Chat opened");
    } else if (onClose && messages.length > 0) {
      onClose();
      log("Chat closed");
    }
  }, [isOpen, messages.length, onOpen, onClose, log]);

  // Simulate typing for bot messages
  const simulateTyping = useCallback((message: string, callback: (message: Message) => void) => {
    setIsTyping(true);
    
    // Calculate typing delay based on message length (min 500ms, max 2000ms)
    const typingDelay = Math.min(Math.max(message.length * 30, 500), 2000);
    
    log(`Simulating typing for ${typingDelay}ms`);
    
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "bot",
        timestamp: new Date(),
        type: "text"
      };
      callback(botMessage);
      
      if (onMessage) onMessage(botMessage);
    }, typingDelay);
  }, [log, onMessage]);

  // Function to save chats to JSON files
  const saveChatToFile = (sessionId, messages) => {
    const filePath = path.join(__dirname, `chat_${sessionId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
    console.log(`Chat saved to ${filePath}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    if (onMessage) onMessage(userMessage);
    log('Sent user message', userMessage);

    try {
      const response = await fetch(mistralApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          message: inputValue,
          sessionId: sessionId,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      if (data.response) {
        simulateTyping(data.response, (message) => {
          setMessages((prev) => [...prev, message]);
        });
      }

      saveChatToFile(sessionId, [...messages, userMessage]);

      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    } catch (error) {
      log('Error sending message', error);

      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Sorry, I couldn\'t process your request. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
      };

      setMessages((prev) => [...prev, errorMessage]);
      if (onMessage) onMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const useCase = (form.elements.namedItem('useCase') as HTMLInputElement)?.value;
    
    if (!email) return;
    
    const newLeadInfo: LeadInfo = { 
      name: name || "Website Visitor",
      email: email,
      useCase: useCase || "",
      submittedAt: new Date().toISOString()
    };
    
    setLeadInfo(newLeadInfo);
    setShowLeadForm(false);
    
    log("Lead submitted", newLeadInfo);
    if (onLeadSubmit) onLeadSubmit(newLeadInfo);
    
    // Add thank you message
    const thankYouMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you, ${name || "there"}! I've recorded your contact information.`,
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    };
    
    setMessages(prev => [...prev, thankYouMessage]);
    
    // Send lead info to webhook
    try {
      const response = await fetch(leadSubmissionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-API-Key": apiKey
        },
        body: JSON.stringify({
          lead: newLeadInfo,
          sessionId: sessionId
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to send lead information");
      }
      
      log("Lead information sent successfully");
    } catch (error) {
      log("Error sending lead info", error);
    }
  };

  // Handle button or quick reply click
  const handleOptionClick = (text: string, action?: string, url?: string) => {
    if (action === "url" && url) {
      window.open(url, "_blank");
      return;
    }
    
    // Treat as a message
    setInputValue(text);
    setTimeout(() => {
      handleSubmit(new Event('submit') as unknown as React.FormEvent);
    }, 100);
  };

  // Public methods
  useEffect(() => {
    if (!window.CrockChat) window.CrockChat = {};
    
    window.CrockChat.open = () => setIsOpen(true);
    window.CrockChat.close = () => setIsOpen(false);
    window.CrockChat.sendMessage = (msg: string) => {
      setInputValue(msg);
      setTimeout(() => {
        handleSubmit(new Event('submit') as unknown as React.FormEvent);
      }, 100);
    };
    
    log("Exposed public methods");
    
    return () => {
      delete window.CrockChat.open;
      delete window.CrockChat.close;
      delete window.CrockChat.sendMessage;
    };
  }, [log]);

  return (
    <div className={`crock-chat ${currentTheme}`}>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="crock-chat-toggle"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="crock-icon" />
        ) : (
          <MessageCircle className="crock-icon" />
        )}
        
        {/* Unread badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="crock-unread-badge">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={`crock-chat-window h-[600px] ${isMobile ? 'crock-mobile' : ''}`}>
          {/* Header */}
          <div className="crock-chat-header">
            <div className="crock-chat-header-title">
              {logoUrl && (
                <img 
                  src={logoUrl} 
                  alt={`${botName} logo`} 
                  className="crock-logo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <h3>{botName}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="crock-close-button"
              aria-label="Close chat"
            >
              <X className="crock-icon-sm" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="crock-messages-container">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`crock-message-wrapper ${message.sender === 'user' ? 'crock-user-message' : 'crock-bot-message'}`}
              >
                <div className="crock-message">
                  <div className="crock-message-header">
                    {message.sender === 'bot' ? (
                      <Bot className="crock-icon-xs" />
                    ) : (
                      <User className="crock-icon-xs" />
                    )}
                    <span className="crock-timestamp">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <p>{message.text}</p>
                  
                  {/* Buttons */}
                  {message.type === "buttons" && message.options && (
                    <div className="crock-buttons">
                      {message.options.map((option, index) => (
                        <button 
                          key={index}
                          className="crock-button"
                          onClick={() => handleOptionClick(option.text, option.action, option.url)}
                        >
                          {option.text}
                          {option.action === "url" && <ExternalLink className="crock-icon-xs ml-1" />}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Quick Replies */}
                  {message.type === "quickReplies" && message.options && (
                    <div className="crock-quick-replies">
                      {message.options.map((option, index) => (
                        <button 
                          key={index}
                          className="crock-quick-reply"
                          onClick={() => handleOptionClick(option.text)}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="crock-message-wrapper crock-bot-message">
                <div className="crock-message crock-typing">
                  <div className="crock-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Lead capture form */}
            {showLeadForm && (
              <div className="crock-lead-form-container">
                <form onSubmit={handleLeadSubmit} className="crock-lead-form">
                  <div className="crock-form-group">
                    <label htmlFor="email">Email (required)</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="crock-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="crock-form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="crock-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="crock-form-group">
                    <label htmlFor="useCase">How can we help you?</label>
                    <input 
                      type="text" 
                      id="useCase"
                      name="useCase"
                      className="crock-input"
                      placeholder="Tell us about your use case"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="crock-submit-button"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          {!showLeadForm && (
            <form onSubmit={handleSubmit} className="crock-input-container">
              <div className="crock-input-wrapper">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading || isTyping}
                  placeholder="Type a message..."
                  className="crock-message-input bg-gray-700 border-none outline-none ring-none"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || isTyping || !inputValue.trim()}
                  className="crock-send-button"
                  aria-label="Send message"
                >
                  <Send className="crock-icon-sm" />
                </button>
              </div>
            </form>
          )}
          
          {/* Footer */}
          <div className="crock-footer">
            <span>Powered by <a href="https://crock.ai" target="_blank" rel="noopener noreferrer">Crock AI</a></span>
          </div>
        </div>
      )}
    </div>
  );
};

// Initialize function for embedding
function initCrockChat() {
  // Create container if it doesn't exist
  let container = document.getElementById('crock-chat-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'crock-chat-container';
    document.body.appendChild(container);
  }

  const root = createRoot(container);
  root.render(
    <CrockChat 
      apiKey="YOUR_API_KEY"
      widgetId="YOUR_WIDGET_ID"
      // Optional props
      theme="auto"
      logoUrl="https://yourdomain.com/logo.png"
      debug={true}
      onOpen={() => console.log('Chat opened')}
      onClose={() => console.log('Chat closed')}
      onMessage={(msg) => console.log('New message:', msg)}
      onLeadSubmit={(lead) => console.log('Lead submitted:', lead)}
    />
  );
}


export default CrockChat;