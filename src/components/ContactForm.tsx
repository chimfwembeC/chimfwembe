import React from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <User className="h-4 w-4" />
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Mail className="h-4 w-4" />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <MessageSquare className="h-4 w-4" />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}