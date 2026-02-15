import { useEffect, useState } from 'react';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Developer from '../components/Developer';
import FAQ from '../components/FAQ';
import FloorPlans from '../components/FloorPlans';
import Hero from '../components/Hero';
import API_URL from '../config';

const mockData = {
  hero: {
    headingLine1: 'THINKING',
    headingLine2: 'OF A FANTASTIC VICINITY?',
    subHeading1: '20+ Podium Luxurious Amenities',
    subHeading2: 'Spacious Balcony Homes*',
    projectName: 'INFINITY',
    ctaText: 'Enquiry Now',
    location: 'BLDG. NO. 223/224, CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)',
    image: '/hero.png',
    backImage: '/back.png',
    navItems: [
      'Home',
      'Overview',
      'Amenities',
      'Floor Plans',
      'Developer',
      'Contact',
    ],
    pricing: [
      { title: 'Smart 1 BHK', price: '69.99 Lacs*', original: '74.99 Lacs' },
      { title: 'Premium 2 BHK', price: '96.99 Lacs*', original: '1.05 CR' },
    ],
  },

  overview: {
    title: 'About Project',
    description:
      'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.',
    highlightQuote:
      'The moment I entered the house, it felt welcomed — this feeling defines the privilege Vighnaharta Enclave offers.',
    buttonText: 'Download Brochure',
    images: ['/aboutmain.png', '/aboutpr2.png', '/aboutpr3.png'],
  },

  amenities: {
    title: 'Amenities',
    description:
      'Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.',
    image: '/anemities.png',
    items: [
      { name: 'Gymnasium', icon: '💪' },
      { name: 'Yoga Deck', icon: '🧘' },
      { name: 'Kids Play Area', icon: '🎢' },
      { name: 'Jogging Track', icon: '🏃' },
    ],
    buildings: [
      {
        name: 'Vighnaharta Aaradhya',
        status: 'Completed',
        image: '/completedbuilding.png',
      },
      {
        name: 'Vighnaharta Enclave',
        status: 'Newly Launched',
        image: '/township.png',
      },
      { name: 'Vighnaharta Infinity', status: 'Upcoming', image: '/hero.png' },
    ],
  },

  floorPlans: {
    title: 'Floor Plans',
    viewImage: '/internalview.png',
    videoThumb: '/township.png',
    wings: ['East Wing', 'West Wing', 'North Wing', 'South Wing'],
    types: [
      {
        name: '1 BHK',
        area: '380-411 RCA Sq.ft',
        price: 'Click for price',
      },
      {
        name: '2 BHK',
        area: '580-611 RCA Sq.ft',
        price: 'Click for price',
      },
      {
        name: '5,6 BHK',
        area: '1100-1400 RCA Sq.ft',
        price: 'Click for price',
      },
    ],
  },

  developer: {
    title: 'About Developer',
    description:
      "Vighnaharta Developers is more than just a real estate company — we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living.",
    stats: [
      { label: 'Projects', value: '6' },
      { label: 'sq. ft. area developed', value: '1.32 LAC' },
      { label: 'Happy Families', value: '449+' },
      { label: 'sq. ft. ongoing', value: '3.77 LAC' },
      { label: 'sq. ft. Area Upcoming', value: '2.7 LAC' },
    ],
    updates: [
      {
        title: 'Under Construction',
        sub: 'Tower A',
        image: '/incompleteconstruction.png',
      },
      { title: 'Completed', sub: 'Tower B', image: '/completedbuilding.png' },
      { title: 'Completed', sub: 'Tower C', image: '/completedbuilding.png' },
    ],
  },

  faqs: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question:
          'What makes Swastik Group a trusted name in real estate in Vikhroli?',
        answer:
          'We deliver premium quality homes with transparency and long-term value.',
      },
      {
        question:
          'What types of residential projects does Swastik Group offer in Vikhroli?',
        answer: 'We offer smart 1BHK, premium 2BHK, and spacious 3BHK homes.',
      },
      {
        question:
          "Why should I invest in Swastik Group's new projects in Vikhroli?",
        answer:
          'Vikhroli is a prime location with great connectivity and appreciation potential.',
      },
      {
        question:
          'How does Swastik Group ensure quality and sustainability in its real estate projects?',
        answer:
          'We use eco-friendly materials and modern construction techniques.',
      },
    ],
  },
};

const Home = () => {
  const [content, setContent] = useState(mockData);

  const fetchContent = async () => {
    try {
      const res = await fetch(`${API_URL}/api/content`);
      const data = await res.json();
      if (data && data.hero) {
        setContent(data);
      }
    } catch (err) {
      console.error('Failed to fetch content:', err);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {content && <Hero data={content.hero} />}

      {content && <About data={content.overview} />}

      {content && <Amenities data={content.amenities} />}

      {content && <FloorPlans data={content.floorPlans} />}

      {content && <Developer data={content.developer} />}

      {content && <FAQ data={content.faqs} />}

      {/* Footer */}
      <footer className="bg-brand-dark py-12 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <img
            src="/vite.svg"
            alt="Footer Logo"
            className="h-12 mb-6 grayscale invert"
          />
          <p className="text-white/50 text-xs tracking-widest uppercase">
            © 2026 Vighnaharta Developers | Designed for Excellence
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
