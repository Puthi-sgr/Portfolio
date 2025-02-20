import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="dark:text-gray-300">
                  chethaputhi@gmail.com
                </span>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="dark:text-gray-300">085 593 363</span>
              </div>
              <div className="flex items-center group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="dark:text-gray-300">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white transition-all h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
