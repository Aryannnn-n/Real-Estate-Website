import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutEditor from '../components/admin/AboutEditor';
import AmenitiesEditor from '../components/admin/AmenitiesEditor';
import DeveloperEditor from '../components/admin/DeveloperEditor';
import FAQEditor from '../components/admin/FAQEditor';
import FloorPlansEditor from '../components/admin/FloorPlansEditor';
import HeroEditor from '../components/admin/HeroEditor';

const AdminDashboard = () => {
  const [section, setSection] = useState('hero');
  const navigate = useNavigate();

  const [content, setContent] = useState(null);

  const fetchContent = async () => {
    const res = await axios.get('http://localhost:3000/api/content');
    setContent(res.data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const logout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex bg-brand-light font-sans text-brand-dark">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl p-8">
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-1">
            Vighnaharta
          </p>
          <h2 className="text-2xl font-serif tracking-widest">ADMIN</h2>
        </div>

        <div className="space-y-3">
          {['hero', 'about', 'amenities', 'floorplans', 'developer', 'faq'].map(
            (item) => (
              <button
                key={item}
                onClick={() => setSection(item)}
                className={`w-full text-left px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-md transition-all ${
                  section === item ? 'bg-brand-green' : 'hover:bg-brand-light'
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        <button
          onClick={logout}
          className="mt-12 w-full border border-red-400 text-red-500 py-2 rounded-md text-xs uppercase tracking-widest font-bold hover:bg-red-50 transition-all"
        >
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-3xl shadow-xl p-12">
        {!content && <p>Loading...</p>}

        {content && section === 'hero' && (
          <HeroEditor content={content} refresh={fetchContent} />
        )}
        {content && section === 'about' && (
          <AboutEditor content={content} refresh={fetchContent} />
        )}
        {content && section === 'amenities' && (
          <AmenitiesEditor content={content} refresh={fetchContent} />
        )}
        {content && section === 'floorplans' && (
          <FloorPlansEditor content={content} refresh={fetchContent} />
        )}
        {content && section === 'developer' && (
          <DeveloperEditor content={content} refresh={fetchContent} />
        )}
        {content && section === 'faq' && (
          <FAQEditor content={content} refresh={fetchContent} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
