import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'contact@example.com',
    href: 'mailto:contact@example.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Get in Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}