import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, TrashIcon } from 'lucide-react';
const Cart = () => {
  // This is a placeholder cart with dummy data
  const cartItems = [{
    id: 'red-parfum',
    name: 'Red Parfum',
    size: '50ml',
    price: 2499,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80'
  }];
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 100;
  const total = subtotal + shipping;
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl mb-8">Your Cart</h1>
        {cartItems.length === 0 ? <div className="text-center py-12">
            <p className="text-xl mb-6">Your cart is empty</p>
            <Link to="/products" className="inline-flex items-center px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition">
              Continue Shopping
            </Link>
          </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Cart Items */}
              <div className="border-b border-stone-200 pb-4 mb-4">
                {cartItems.map(item => <div key={`${item.id}-${item.size}`} className="flex items-center py-4 border-t border-stone-200">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-stone-600 text-sm">
                        Size: {item.size}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <button className="text-stone-500 hover:text-stone-700">
                            <TrashIcon size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{item.price}</p>
                          <p className="text-sm text-stone-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
              <Link to="/products" className="inline-flex items-center text-stone-600 hover:text-stone-900">
                <ArrowLeftIcon size={16} className="mr-2" /> Continue Shopping
              </Link>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 p-6">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="border-t border-stone-200 pt-4 font-medium flex justify-between">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
                <button className="w-full bg-stone-900 text-white py-3 mt-6">
                  Proceed to Checkout
                </button>
                <div className="mt-6 text-sm text-stone-600">
                  <p>Payment will be processed securely via Razorpay.</p>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default Cart;