import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/policies/Privacy';
import DoNotSell from './pages/policies/DoNotSell';
import Shipping from './pages/policies/Shipping';
import Refund from './pages/policies/Refund';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
export function App() {
  return <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/*" element={<Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/do-not-sell" element={<DoNotSell />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/refund" element={<Refund />} />
              </Routes>
            </Layout>} />
      </Routes>
    </Router>;
}