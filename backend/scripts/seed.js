require('dotenv').config();
const mongoose = require('mongoose');
const Content = require('../models/Content');

const seedData = {
  hero: {
    headingLine1: 'THINKING',
    headingLine2: 'OF A FANTASTIC VICINITY?',
    subHeading1: '20+ Podium Luxurious Amenities',
    subHeading2: 'Spacious Balcony Homes*',
    projectName: 'INFINITY',
    ctaText: 'Enquiry Now',
    location: 'Circle - Kannamwar Nagar 1, Vikhroli (East)',
    navItems: [
      'Home',
      'Overview',
      'Amenities',
      'Floor Plans',
      'Developer',
      'Contact',
    ],
    pricing: [
      { title: 'Smart 1 BHK', price: '₹ 69.99 Lacs*' },
      { title: 'Premium 2 BHK', price: '₹ 96.99 Lacs*' },
    ],
  },
  overview: {
    title: 'About Project',
    description:
      'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.',
    highlightQuote: 'The moment I entered the house, it felt welcomed.',
    buttonText: 'Download Brochure',
  },
  amenities: {
    title: 'Amenities',
    description:
      'Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.',
    items: [
      { name: 'Gymnasium', icon: '💪' },
      { name: 'Yoga Deck', icon: '🧘' },
      { name: 'Kids Play Area', icon: '🎢' },
      { name: 'Jogging Track', icon: '🏃' },
    ],
  },
  floorPlans: {
    title: 'Floor Plans',
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
    ],
  },
  developer: {
    title: 'About Developer',
    description:
      'Vighnaharta Developers is more than just a real estate company — we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we’re transforming skylines and setting new standards in urban living. Our foundation rests on integrity, excellence, and innovation, ensuring every project is a perfect blend of creativity, functionality, and sustainability.',
    stats: [
      { label: 'Projects', value: '6' },
      { label: 'Sq. Ft. Developed', value: '1.32 LAC' },
      { label: 'Happy Families', value: '449+' },
      { label: 'Ongoing Area', value: '3.77 LAC' },
      { label: 'Upcoming Area', value: '2.7 LAC' },
    ],
    updates: [
      { title: 'Under Construction', sub: 'Tower A' },
      { title: 'Completed', sub: 'Tower B' },
      { title: 'Completed', sub: 'Tower C' },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What makes Swastik Group a trusted name in real estate in Vikhroli?',
        answer:
          'We deliver premium quality homes with transparency and long-term value, ensuring trust and satisfaction for every customer.',
      },
      {
        question: 'What types of residential projects does Swastik Group offer in Vikhroli?',
        answer: 'We offer a range of residential projects including 1 BHK and 2 BHK spacious apartments with modern amenities.',
      },
      {
        question: 'Why should I invest in Swastik Group’s new projects in Vikhroli?',
        answer: 'Investing with us guarantees prime location, superior construction quality, and excellent potential for appreciation.',
      },
      {
        question: 'How does Swastik Group ensure quality and sustainability in its real estate projects?',
        answer: 'We use high-grade materials and adhere to eco-friendly construction practices to ensure durability and sustainability.',
      },
      {
        question: 'How can I learn more about upcoming residential projects by Swastik Group in Vikhroli?',
        answer: 'You can visit our website or contact our sales team for the latest updates on our upcoming projects.',
      },
    ],
  },
};

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Content.deleteMany({});
    console.log('Cleared existing content');

    await Content.create(seedData);
    console.log('Seeded database with initial content');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
