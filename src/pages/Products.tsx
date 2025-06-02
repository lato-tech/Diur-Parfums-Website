import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../utils/data';
import { FilterIcon } from 'lucide-react';
const Products = () => {
  const [filter, setFilter] = useState('all');
  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl mb-4">Our Collection</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover our exclusive fragrances, each crafted with essential oils
            from our Himalayan estates, embodying generations of expertise and
            the pristine essence of the mountains.
          </p>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center mb-8 gap-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 text-sm ${filter === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}>
            All
          </button>
          <button onClick={() => setFilter('floral')} className={`px-4 py-2 text-sm ${filter === 'floral' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}>
            Floral
          </button>
          <button onClick={() => setFilter('woody')} className={`px-4 py-2 text-sm ${filter === 'woody' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}>
            Woody
          </button>
          <button onClick={() => setFilter('oriental')} className={`px-4 py-2 text-sm ${filter === 'oriental' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}>
            Oriental
          </button>
          <button onClick={() => setFilter('citrus')} className={`px-4 py-2 text-sm ${filter === 'citrus' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}>
            Citrus
          </button>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => <Link to={`/products/${product.id}`} key={product.id} className="group">
              <div className="mb-4 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover group-hover:scale-105 transition duration-500" />
                {product.isNew && <span className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-medium">
                    New
                  </span>}
                {product.isBestseller && <span className="absolute top-4 left-4 bg-stone-900 text-white px-3 py-1 text-xs font-medium">
                    Bestseller
                  </span>}
              </div>
              <h3 className="font-serif text-xl mb-2">{product.name}</h3>
              <p className="text-stone-600 text-sm mb-3">{product.category}</p>
              <p className="font-medium">From ₹{product.variants[0].price}</p>
            </Link>)}
        </div>
      </div>
    </div>;
};
export default Products;