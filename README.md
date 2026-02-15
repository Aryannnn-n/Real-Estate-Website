# Real Estate Website with Admin Panel

A modern, dynamic Real Estate landing page built with the MERN stack (MongoDB, Express, React, Node.js). This project features a fully functional Admin Panel that allows authorized users to update website content (text, images, pricing, etc.) in real-time without touching the code.

## 🔗 Live Links & Repository

- **Live Website:** [https://real-estate-website-ochre.vercel.app/](https://real-estate-website-ochre.vercel.app/)
- **GitHub Repository:** [https://github.com/Aryannnn-n/Real-Estate-Website.git](https://github.com/Aryannnn-n/Real-Estate-Website.git)

---

## 🚀 Features

### Public User Interface
- **Responsive Design**: Fully responsive layout built with TailwindCSS.
- **Dynamic Sections**:
  - **Hero Section**: High-impact visual introduction with key project details.
  - **About Implementation**: Detailed project operational information.
  - **Amenities**: Showcase of available facilities.
  - **Floor Plans**: Visual layouts for different unit configurations.
  - **Developer Section**: Information about the builders.
  - **FAQ**: Frequently asked questions.

### Admin Dashboard
- **Secure Login**: Protected route for admin access.
- **Content Management System (CMS)**:
  - Edit all text content in the Hero section (Headings, Subheadings, CTA text, etc.).
  - Update image paths and background visuals.
  - Manage pricing and project location details.
  - Updates are reflected instantly on the live site.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)


---

## 🔐 Admin Credentials

To access the Admin Panel, navigate to `/admin` or click the "Admin Login" link (if visible).

- **Email**: `admin@gmail.com`
- **Password**: `1234`

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally.

### Prerequisites
- Node.js installed on your machine.
- MongoDB connection string (local or Atlas).

### 1. Clone the Repository
```bash
git clone https://github.com/Aryannnn-n/Real-Estate-Website.git
cd Real-Estate-Website
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm start
# or for development with nodemon
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory (if not already present):
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

The application should now be running at `http://localhost:5173` (or the port shown in your terminal).

---

Dev - Aryan Chavan