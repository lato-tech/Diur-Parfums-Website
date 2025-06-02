import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'namiex' && password === 'namiex') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };
  return <div className="min-h-screen bg-diur-cream flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-display font-medium text-diur-forest">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-body text-diur-forest/70">
            Access the dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-diur-maroon text-center font-body">
              {error}
            </div>}
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-body font-medium text-diur-forest">
                Username
              </label>
              <input id="username" name="username" type="text" required className="mt-1 block w-full border border-diur-gold/30 rounded-none px-3 py-2 text-diur-forest focus:outline-none focus:ring-1 focus:ring-diur-gold" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block text-body font-medium text-diur-forest">
                Password
              </label>
              <input id="password" name="password" type="password" required className="mt-1 block w-full border border-diur-gold/30 rounded-none px-3 py-2 text-diur-forest focus:outline-none focus:ring-1 focus:ring-diur-gold" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent font-accent text-base font-medium text-white bg-diur-forest hover:bg-diur-forest/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-diur-gold">
            Sign in
          </button>
        </form>
      </div>
    </div>;
};
export default Login;