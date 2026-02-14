import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {

  const [content, setContent] = useState({
    hero: {
      heading1: "THINKING",
      heading2: "OF A FANTASTIC VICINITY?",
      price1: "₹ 69.99 Lacs*",
      price2: "₹ 96.99 Lacs*",
      location: "Bldg. No. 223/224, Vikhroli (East)"
    },

    amenities: [
      { name: "Gymnasium", icon: "💪" },
      { name: "Kids Play Area", icon: "🎢" },
      { name: "Jogging Track", icon: "🏃" },
      { name: "Yoga Deck", icon: "🧘" }
    ],

    developer: {
      description:
        "Vighnaharta Developers is more than just a real estate company...",
    }
  });

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
