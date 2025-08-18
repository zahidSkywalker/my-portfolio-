# zahidSkywalker - Portfolio Website

A modern, fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion, deployed entirely on Vercel with serverless functions.

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
- **Contact Form** with email notifications

### Backend (Vercel Serverless)
- **Vercel Functions** for API endpoints
- **Contact Form API** with email notifications
- **Auto-reply emails** to form submitters
- **Input validation** and error handling
- **Professional email templates**

### Docker Support
- **Multi-stage Docker build** for optimized production images
- **Docker Compose** for easy local development
- **Nginx reverse proxy** for production deployment
- **Health checks** and proper container orchestration

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

### Backend (Vercel)
- Vercel Serverless Functions
- Nodemailer
- Email notifications

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email notifications)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zahidul-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=ionzahid0987@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000

## 🐳 Docker Deployment

### Quick Start with Docker

1. **Build and run with Docker Compose**
   ```bash
   ./docker-test.sh
   ```

2. **Or manually:**
   ```bash
   # Build the image
   docker-compose build
   
   # Start the containers
   docker-compose up -d
   
   # View logs
   docker-compose logs -f
   
   # Stop containers
   docker-compose down
   ```

3. **Access the application**
   - Portfolio: http://localhost:3000
   - With Nginx (production): http://localhost:80

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Add your email credentials

### Email Setup

1. **Enable 2-Factor Authentication** on your Gmail
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → App passwords
   - Select "Mail" → "Other (Custom name)"
   - Name: "Zahidul Portfolio"
   - Copy the 16-character password

3. **Add to Vercel Environment Variables**:
   - `EMAIL_USER` = ionzahid0987@gmail.com
   - `EMAIL_PASS` = your-16-character-app-password

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
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run install-all` - Install all dependencies
- `npm run vercel-build` - Build for Vercel deployment

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 📞 Contact Form Features

The contact form includes:
- **Email notifications** sent to your Gmail
- **Auto-reply emails** sent to form submitters
- **Professional email templates**
- **Input validation**
- **Error handling**
- **Success/error messages**

## 🔒 Security Features

- **HTTPS** - Automatic with Vercel
- **Input Validation** - Form validation
- **Environment Variables** - Secure configuration
- **CORS** - Configured for production

## 📊 Project Structure

```
zahidul-portfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # All React components
│   │   ├── context/         # Theme context
│   │   └── index.css        # Tailwind CSS styles
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── api/                     # Vercel serverless functions
│   └── contact.js          # Contact form API
├── vercel.json             # Vercel configuration
├── package.json            # Root dependencies
└── README.md               # Project documentation
```

## 🎉 Success!

Your portfolio is now ready to:
- ✅ Impress potential clients and employers
- ✅ Showcase your React and frontend skills
- ✅ Demonstrate your 3D and creative abilities
- ✅ Collect contact form submissions
- ✅ Provide a professional online presence

## 📞 Support

If you need help with deployment or have questions:
- **Email**: ionzahid0987@gmail.com
- **Documentation**: Check VERCEL_DEPLOYMENT.md for detailed deployment guide

---

**Built with ❤️ by zahidSkywalker**

For questions or support, reach out at: ionzahid0987@gmail.com

---

## 👨‍💻 Author

**zahidSkywalker**
- GitHub: [@zahidSkywalker](https://github.com/zahidSkywalker)
- LinkedIn: [zahidSkywalker](https://linkedin.com/in/zahidul-islam)
- Email: ionzahid0987@gmail.com

⭐ **Star this repository if you found it helpful!**