import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'lucide-react';
import { products } from '../utils/data';
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <Link to="/products" className="text-stone-800 underline">
          Return to collection
        </Link>
      </div>;
  }
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-stone-600 mb-8">
          <ArrowLeftIcon size={16} className="mr-2" /> Back to collection
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img src={activeImage} alt={product.name} className="w-full h-[600px] object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => setActiveImage(product.image)} className={`border-2 ${activeImage === product.image ? 'border-stone-900' : 'border-transparent'}`}>
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
              </button>
              {product.additionalImages.map((img, index) => <button key={index} onClick={() => setActiveImage(img)} className={`border-2 ${activeImage === img ? 'border-stone-900' : 'border-transparent'}`}>
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-32 object-cover" />
                </button>)}
            </div>
          </div>
          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl mb-2">{product.name}</h1>
            <p className="text-stone-600 text-sm mb-6">{product.category}</p>
            <p className="font-medium text-2xl mb-4">
              ₹{product.variants[selectedVariant].price}
            </p>
            <div className="mb-6">
              <p className="font-medium mb-2">Size</p>
              <div className="flex space-x-4">
                {product.variants.map((variant, index) => <button key={index} onClick={() => setSelectedVariant(index)} className={`px-4 py-2 border ${selectedVariant === index ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300'}`}>
                    {variant.size}
                  </button>)}
              </div>
            </div>
            <div className="mb-6">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center border border-stone-300 inline-flex">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-stone-600">
                  <MinusIcon size={16} />
                </button>
                <span className="px-4 py-2 border-l border-r border-stone-300">
                  {quantity}
                </span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-stone-600">
                  <PlusIcon size={16} />
                </button>
              </div>
            </div>
            <button className="w-full bg-stone-900 text-white py-3 mb-6 flex items-center justify-center">
              <ShoppingBagIcon size={18} className="mr-2" /> Add to Cart
            </button>
            <div className="prose prose-stone max-w-none">
              <p className="mb-6">{product.description}</p>
              <p>{product.longDescription}</p>
            </div>
            <div className="border-t border-stone-200 mt-8 pt-8">
              <h3 className="font-medium mb-4">Details</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>SKU: {product.variants[selectedVariant].sku}</li>
                <li>Category: {product.category}</li>
                <li>Size: {product.variants[selectedVariant].size}</li>
                <li>Made in Himachal Pradesh, India</li>
                <li>Contains natural essential oils</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetail;