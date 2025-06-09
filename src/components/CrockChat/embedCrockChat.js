/**
 * CrockChat - Embeddable AI Chat Widget
 * Version: 1.0.0
 * 
 * This script allows you to embed the CrockChat widget on any website
 * with a single script tag. Configuration is done via data attributes.
 * 
 * Example:
 * <script 
 *   src="https://cdn.crock.ai/chat-widget.js" 
 *   data-key="your-api-key" 
 *   data-id="your-widget-id" 
 *   data-name="Your Bot Name" 
 *   data-theme="light"
 *   data-logo="https://example.com/logo.png"
 *   async
 * ></script>
 */

(function() {
  // Create global CrockChat object if it doesn't exist
  if (!window.CrockChat) {
    window.CrockChat = {};
  }

  // Get the current script tag
  const currentScript = document.currentScript;
  
  // Extract configuration from data attributes
  const config = {
    apiKey: currentScript.getAttribute('data-key'),
    widgetId: currentScript.getAttribute('data-id'),
    botName: currentScript.getAttribute('data-name'),
    theme: currentScript.getAttribute('data-theme') || 'auto',
    logoUrl: currentScript.getAttribute('data-logo'),
    debug: currentScript.hasAttribute('data-debug')
  };
  
  // Validate required configuration
  if (!config.apiKey || !config.widgetId) {
    console.error('[CrockChat] Error: Missing required configuration. Please provide data-key and data-id attributes.');
    return;
  }
  
  // Load CSS
  function loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.crock.ai/chat-widget.css';
    document.head.appendChild(link);
  }
  
  // Load React and ReactDOM
  function loadReactScripts(callback) {
    // Check if React is already loaded
    if (window.React && window.ReactDOM) {
      callback();
      return;
    }
    
    // Load React
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
    reactScript.crossOrigin = '';
    
    // Load ReactDOM after React
    reactScript.onload = function() {
      const reactDomScript = document.createElement('script');
      reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
      reactDomScript.crossOrigin = '';
      reactDomScript.onload = callback;
      document.head.appendChild(reactDomScript);
    };
    
    document.head.appendChild(