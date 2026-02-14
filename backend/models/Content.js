const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  hero: {
    headingLine1: String,
    headingLine2: String,
    subHeading1: String,
    subHeading2: String,
    projectName: String,
    ctaText: String,
    location: String,
    image: String,
    backImage: String,
    navItems: [String],
    pricing: [
      {
        title: String,
        price: String,
        original: String, 
      },
    ],
  },

  overview: {
    title: String,
    description: String,
    highlightQuote: String,
    buttonText: String,
    images: [String],
  },

  amenities: {
    title: String,
    description: String,
    image: String,
    items: [
      {
        name: String,
        icon: String,
      },
    ],
    buildings: [
      {
        name: String,
        status: String,
        image: String,
      },
    ],
  },

  floorPlans: {
    title: String,
    viewImage: String,
    videoThumb: String,
    wings: [String],
    types: [
      {
        name: String,
        area: String,
        price: String,
      },
    ],
  },

  developer: {
    title: String,
    description: String,
    stats: [
      {
        label: String,
        value: String,
      },
    ],
    updates: [
      {
        title: String,
        sub: String,
        image: String,
      },
    ],
  },

  faqs: {
    title: String,
    items: [
      {
        question: String,
        answer: String,
      },
    ],
  },
});

module.exports = mongoose.model('Content', contentSchema);
