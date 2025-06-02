import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { products, brandStory } from '../utils/data';
const Home = () => {
  const featuredProducts = products.filter(product => product.isNew || product.isBestseller);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-stone-100 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1615228939096-9ead6c356c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Luxury perfume bottles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-4">
              Diur Parfums
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Essences of the Himalayas, bottled with heritage
            </p>
            <Link to="/products" className="inline-flex items-center px-6 py-3 bg-white text-stone-900 hover:bg-stone-100 transition font-medium">
              Explore Collection <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl mb-12 text-center">
            Our Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => <Link to={`/products/${product.id}`} key={product.id} className="group">
                <div className="mb-4 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h3 className="font-serif text-xl mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-3">
                  {product.category}
                </p>
                <p className="font-medium">From ₹{product.variants[0].price}</p>
              </Link>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center px-6 py-3 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition font-medium">
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>
      {/* Heritage Story */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1586441133374-ed1db8e8bac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Himalayan landscape" className="w-full h-96 object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-light mb-6">
                Our Heritage
              </h2>
              <p className="text-stone-700 mb-4">
                Founded by {brandStory.founderName}, Diur Parfums draws
                inspiration from generations of expertise in essential oil
                production from the Himalayan region.
              </p>
              <p className="text-stone-700 mb-4">
                {brandStory.heritage.maternalGrandfather}
              </p>
              <p className="text-stone-700 mb-6">
                {brandStory.heritage.paternalHeritage}
              </p>
              <Link to="/about" className="inline-flex items-center font-medium text-stone-900 hover:text-stone-600 transition">
                Discover our story <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-4">Join Our Journey</h2>
          <p className="max-w-xl mx-auto mb-8">
            Subscribe to receive updates on new fragrances, limited editions,
            and exclusive offers via email and WhatsApp.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 text-stone-900 focus:outline-none" />
              <button type="submit" className="px-6 py-3 bg-stone-700 hover:bg-stone-600 transition font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex">
              <input type="tel" placeholder="WhatsApp number (optional)" className="flex-grow px-4 py-3 text-stone-900 focus:outline-none" />
            </div>
            <p className="text-xs text-stone-400 text-left">
              By subscribing, you agree to receive marketing communications from
              us. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </div>;
};
export default Home;