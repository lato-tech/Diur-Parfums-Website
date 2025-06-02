import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Contact = () => {
  return <div className="w-full bg-diur-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl mb-6 text-center text-diur-forest">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="prose prose-stone max-w-none mb-8">
                <p>
                  We'd love to hear from you. Whether you have questions about
                  our fragrances, need assistance with an order, or would like
                  to inquire about partnerships, please don't hesitate to reach
                  out.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon size={20} className="text-stone-800 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-stone-600 text-sm">
                      Diur Parfums
                      <br />
                      P.O. Box#4, Dhangu Road
                      <br />
                      Pathankot, Punjab, India - 145001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon size={20} className="text-stone-800 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-stone-600 text-sm">
                      info@diurparfums.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={20} className="text-diur-forest mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-base text-diur-forest">
                      <a href="tel:+911862225256" className="hover:text-diur-olive transition">
                        +91-186-2225256
                      </a>
                      {' | '}
                      <a href="https://wa.me/911862225256" target="_blank" rel="noopener noreferrer" className="hover:text-diur-olive transition">
                        WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4 bg-white p-6 shadow-sm">
                <div>
                  <label htmlFor="phone" className="block text-base font-medium mb-1 text-diur-forest">
                    Phone Number (required)
                  </label>
                  <input type="tel" id="phone" required className="w-full border border-diur-gold/30 px-3 py-2 focus:outline-none focus:border-diur-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-medium mb-1 text-diur-forest">
                    Email (optional)
                  </label>
                  <input type="email" id="email" className="w-full border border-diur-gold/30 px-3 py-2 focus:outline-none focus:border-diur-gold" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full border border-stone-300 px-3 py-2 focus:outline-none focus:border-stone-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full border border-stone-300 px-3 py-2 focus:outline-none focus:border-stone-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white py-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;