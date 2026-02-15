import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form; // Destructure email and password
      const res = await axios.post(`${API_URL}/api/auth/login`, { // Changed to axios.post
        email,
        password,
      });

      const data = res.data; // axios puts response data in .data

      console.log('Login response:', data);

      if (data.success) {
        console.log('Login successful, navigating...');
        localStorage.setItem('isAdmin', 'true');
        setTimeout(() => {
          navigate('/admin/dashboard', { replace: true });
        }, 100);
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
        alert(err.response.data.message || 'Login failed');
      } else {
        alert('Network error or server unreachable');
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center font-sans text-brand-dark">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-2">
            Vighnaharta
          </p>
          <h1 className="text-4xl font-serif tracking-widest">ADMIN</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-brand-green py-3 rounded-md shadow-md font-bold text-sm uppercase tracking-wider"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
