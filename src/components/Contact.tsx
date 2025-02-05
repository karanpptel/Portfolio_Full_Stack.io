import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-indigo-600 mr-4 flex-shrink-0" size={24} />
                <span className="text-gray-600 break-all">patelkaran16102003@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-indigo-600 mr-4 flex-shrink-0" size={24} />
                <span className="text-gray-600">+91 9925831646</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-indigo-600 mr-4 flex-shrink-0" size={24} />
                <span className="text-gray-600">Vadodara, Gujarat, India.</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;