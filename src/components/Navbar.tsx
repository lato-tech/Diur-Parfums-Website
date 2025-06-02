import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, MenuIcon, XIcon, SearchIcon, UserIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-diur-cream border-b border-diur-gold/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
            <Link to="/" className="font-serif text-2xl font-light tracking-wide text-diur-forest">
              Diur Parfums
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-stone-800 hover:text-stone-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-stone-800 hover:text-stone-600 transition">
              Collection
            </Link>
            <Link to="/about" className="text-stone-800 hover:text-stone-600 transition">
              Heritage
            </Link>
            <Link to="/contact" className="text-stone-800 hover:text-stone-600 transition">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/admin" className="text-diur-forest hover:text-diur-olive transition">
              <UserIcon size={20} />
            </Link>
            <button className="text-diur-forest hover:text-diur-olive transition">
              <SearchIcon size={20} />
            </button>
            <Link to="/cart" className="text-diur-forest hover:text-diur-olive transition relative">
              <ShoppingBagIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-diur-maroon text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <Link to="/" className="text-stone-800 hover:text-stone-600 transition">
                Home
              </Link>
              <Link to="/products" className="text-stone-800 hover:text-stone-600 transition">
                Collection
              </Link>
              <Link to="/about" className="text-stone-800 hover:text-stone-600 transition">
                Heritage
              </Link>
              <Link to="/contact" className="text-stone-800 hover:text-stone-600 transition">
                Contact
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Navbar;