import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'kangwac3@gmail.com',
    href: 'mailto:kangwac3@gmail.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+260 (765) 725-317',
    href: 'tel:+260765725317',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Lusaka Zambia, Lusaka.',
    href: null,
  },
];


export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  href="https://github.com/chimfwembeC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chimfwembe-kangwa-60098127b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/CharlesK83179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border border-gray-500 rounded-2xl bg-gray-100/20 p-6 shadow-md">
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