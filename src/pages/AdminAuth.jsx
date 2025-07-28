import React, { useState } from 'react';
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in with: ${form.email}`);
    } else {
      alert(`Signing up: ${form.name}`);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/admin_bg.jpg')` }}
    >
      <div className="bg-white bg-opacity-95 shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          {isLogin ? 'Admin Login' : 'Admin Sign Up'}
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              isLogin ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${
              !isLogin ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Admin Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {isLogin && (
          <p className="text-xs text-center text-gray-500 mt-4">
            Forgot password? <a href="#" className="underline">Reset here</a>
          </p>
        )}
      </div>

      {/* <Footer/> */}
    </div>
    
  );
  
};

export default AdminAuth;
