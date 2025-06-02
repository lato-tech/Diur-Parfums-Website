import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerData } from '../../types/customer';
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin');
  };
  return <div className="min-h-screen bg-diur-cream">
      <div className="bg-diur-forest text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-display text-2xl">Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-white hover:text-diur-gold transition font-body">
            Logout
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Data */}
          <div className="bg-white p-6 shadow-lg">
            <h2 className="font-display text-xl mb-4 text-diur-forest">
              Customer Management
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-diur-gold/30">
                <h3 className="font-body text-lg mb-2">API Integration</h3>
                <p className="text-sm font-accent">
                  Endpoint: /api/customers
                  <br />
                  Method: GET
                  <br />
                  Headers: Authorization: Bearer {'{token}'}
                </p>
              </div>
              {/* Add customer data table here */}
            </div>
          </div>
          {/* Order Management */}
          <div className="bg-white p-6 shadow-lg">
            <h2 className="font-display text-xl mb-4 text-diur-forest">
              Order Management
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-diur-gold/30">
                <h3 className="font-body text-lg mb-2">API Integration</h3>
                <p className="text-sm font-accent">
                  Endpoint: /api/orders
                  <br />
                  Method: GET
                  <br />
                  Headers: Authorization: Bearer {'{token}'}
                </p>
              </div>
              {/* Add order data table here */}
            </div>
          </div>
          {/* Shipping Management */}
          <div className="bg-white p-6 shadow-lg">
            <h2 className="font-display text-xl mb-4 text-diur-forest">
              Shipping Management
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-diur-gold/30">
                <h3 className="font-body text-lg mb-2">API Integration</h3>
                <p className="text-sm font-accent">
                  Endpoint: /api/shipping
                  <br />
                  Method: GET
                  <br />
                  Headers: Authorization: Bearer {'{token}'}
                </p>
              </div>
              {/* Add shipping data table here */}
            </div>
          </div>
          {/* Analytics */}
          <div className="bg-white p-6 shadow-lg">
            <h2 className="font-display text-xl mb-4 text-diur-forest">
              Analytics
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-diur-gold/30">
                <h3 className="font-body text-lg mb-2">API Integration</h3>
                <p className="text-sm font-accent">
                  Endpoint: /api/analytics
                  <br />
                  Method: GET
                  <br />
                  Headers: Authorization: Bearer {'{token}'}
                </p>
              </div>
              {/* Add analytics charts here */}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;