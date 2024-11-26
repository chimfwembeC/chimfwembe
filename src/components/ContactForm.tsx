import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.from_name) newErrors.name = 'Name is required';
    if (!formData.from_email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      await emailjs.send(
        'service_x7k9k1s', // Service ID
        'template_erpxphj', // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        'gbLJpaHGf1Ak1KEGI' // Public Key
      );
      setSubmitted(true);
      setFormData({ from_name: '', from_email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Thank you for your message!</h2>
          <p className="text-gray-600">We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <User className="h-4 w-4" />
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Mail className="h-4 w-4" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <MessageSquare className="h-4 w-4" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              placeholder="Your message here..."
            />
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
