import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-diur-forest text-diur-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-diur-gold mb-4">
              Diur Parfums
            </h3>
            <p className="text-base mb-4">
              Exquisite French perfumes crafted with over 20% pure parfum
              concentration, created by our master perfumer using the world's
              finest ingredients.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-stone-400 hover:text-white transition">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-diur-gold mb-4 text-lg">Shop</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/products" className="hover:text-white transition">
                  All Fragrances
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Red Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Green Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Violet Collection
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Orange Collection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-diur-gold mb-4">Company</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-diur-gold mb-4">Legal</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/do-not-sell" className="hover:text-white transition">
                  Do Not Sell My Information
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-diur-gold/20 mt-10 pt-6 text-base">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>
                Diur Parfums, P.O. Box#4, Dhangu Road, Pathankot, Punjab, India
                - 145001
              </p>
              <p>Email: info@diurparfums.com | Phone: +91-186-2225256</p>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Diur Parfums. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;