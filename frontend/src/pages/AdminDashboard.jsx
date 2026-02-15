import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutEditor from '../components/admin/AboutEditor';
import AmenitiesEditor from '../components/admin/AmenitiesEditor';
import DeveloperEditor from '../components/admin/DeveloperEditor';
import FAQEditor from '../components/admin/FAQEditor';
import FloorPlansEditor from '../components/admin/FloorPlansEditor';
import HeroEditor from '../components/admin/HeroEditor';
import API_URL from '../config';

const AdminDashboard = () => {
  const [section, setSection] = useState('hero');
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  

  const fetchContent = async () => {
    const res = await axios.get(`${API_URL}/api/content`);
    setContent(res.data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const logout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-brand-light font-sans text-brand-dark">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 p-8 shadow-lg">
        <div>
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase mb-2">
              Vighnaharta
            </p>
            <h2 className="text-2xl font-serif tracking-widest">ADMIN PANEL</h2>
          </div>

          <nav className="space-y-2">
            {[
              'hero',
              'about',
              'amenities',
              'floorplans',
              'developer',
              'faq',
            ].map((item) => (
              <button
                key={item}
                onClick={() => setSection(item)}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-[0.3em] font-bold rounded-md transition-all duration-300 ${
                  section === item
                    ? 'bg-[#a3e635] text-black'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 relative overflow-y-auto p-10 md:p-16">
        {/* Floating Logout Button */}
        <div className="absolute top-6 right-10 md:right-16 z-50">
          <button
            onClick={logout}
            className="bg-white border border-red-400 text-red-500 px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-md hover:bg-red-50 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {!content && (
          <div className="text-sm tracking-widest uppercase text-gray-400">
            Loading Content...
          </div>
        )}

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
      </main>
    </div>
  );
};

export default AdminDashboard;
