# Zahidul Islam - Portfolio Website

A modern, fully responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring smooth animations, dark/light theme toggle, and a functional contact form.

## 🚀 Features

### Frontend
- **React 18** with modern hooks and functional components
- **Tailwind CSS** for responsive and modern styling
- **Framer Motion** for smooth animations and transitions
- **Dark/Light Theme Toggle** with persistent state
- **Responsive Design** that works on all devices
- **SEO Optimized** with proper meta tags and structure
- **Smooth Scrolling** navigation
- **Interactive Project Cards** with hover effects
- **Contact Form** with real-time validation

### Backend
- **Node.js & Express** server
- **MongoDB** database with Mongoose ODM
- **Contact Form API** with email notifications
- **Rate Limiting** and security middleware
- **CORS** enabled for cross-origin requests
- **Environment Variables** for configuration

### Sections
- 🏠 **Hero Section** - Introduction with animated profile image
- 👨‍💻 **About Section** - Personal story and achievements
- 🛠 **Skills Section** - Technical skills with progress bars
- 📂 **Projects Section** - Featured projects with live demos
- 📞 **Contact Section** - Contact form and social links
- 🎨 **Footer** - Quick links and social media

## 🛠 Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- React Icons
- Axios
- React Scroll
- React Helmet Async

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- CORS
- Helmet
- Express Rate Limit

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zahidul-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/zahidul-portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=http://localhost:3000
   ```

   **Note:** For Gmail, you'll need to use an App Password instead of your regular password.

4. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   
   # Or start them separately:
   # Backend (from backend directory)
   npm run dev
   
   # Frontend (from frontend directory)
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `frontend/src/components/Hero.js` - Profile image and introduction
- `frontend/src/components/About.js` - Personal story and achievements
- `frontend/src/components/Skills.js` - Skills and technologies
- `frontend/src/components/Projects.js` - Project details and links
- `frontend/src/components/Contact.js` - Contact information

### Styling
- Colors: Update the primary color scheme in `frontend/tailwind.config.js`
- Fonts: Modify font families in the Tailwind config
- Animations: Customize Framer Motion animations in components

### Backend Configuration
- Database: Update MongoDB connection string
- Email: Configure email settings for contact form notifications
- Security: Adjust rate limiting and CORS settings

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

3. Update the backend CORS settings with your frontend URL.

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the backend directory
3. Update the frontend API calls to use the production backend URL

### Database
- Use MongoDB Atlas for cloud database hosting
- Update the connection string in your backend environment variables

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance Features

- **Lazy Loading** for images and components
- **Optimized Animations** with Framer Motion
- **Compressed Assets** and efficient bundling
- **SEO Optimized** with proper meta tags
- **Fast Loading** with optimized code splitting

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend in development
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend client
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install all dependencies

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 📞 Contact Form Setup

The contact form requires:
1. **MongoDB** database to store messages
2. **Gmail App Password** for email notifications
3. **Backend API** running to handle form submissions

### Email Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for utility-first styling
- **React Icons** for beautiful icons
- **Unsplash** for placeholder images

---

**Built with ❤️ by Zahidul Islam**

For questions or support, reach out at: ionzahid0987@gmail.com