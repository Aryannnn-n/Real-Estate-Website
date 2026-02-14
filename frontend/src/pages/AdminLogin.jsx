import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin/dashboard');
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      console.error(err);
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
