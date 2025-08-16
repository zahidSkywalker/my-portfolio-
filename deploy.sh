#!/bin/bash

echo "🚀 Starting Portfolio Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js and npm are installed ✓"

# Install dependencies
print_status "Installing dependencies..."

# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..

print_status "Dependencies installed successfully ✓"

# Build frontend
print_status "Building frontend..."
cd frontend
npm run build
cd ..

print_status "Frontend built successfully ✓"

# Check if .env file exists in backend
if [ ! -f "backend/.env" ]; then
    print_warning "backend/.env file not found. Please create it with the following variables:"
    echo "PORT=5000"
    echo "MONGODB_URI=your-mongodb-atlas-connection-string"
    echo "EMAIL_USER=ionzahid0987@gmail.com"
    echo "EMAIL_PASS=your-gmail-app-password"
    echo "FRONTEND_URL=https://your-frontend-domain.vercel.app"
fi

print_status "Deployment preparation completed! ✓"
echo ""
echo "📋 Next Steps:"
echo "1. Set up MongoDB Atlas (see backend/mongodb-setup.md)"
echo "2. Configure Gmail App Password (see backend/email-setup.md)"
echo "3. Deploy frontend to Vercel (see frontend/deployment-guide.md)"
echo "4. Deploy backend to Railway (see backend/railway-deployment.md)"
echo "5. Update environment variables in your hosting platforms"
echo ""
echo "🎉 Your portfolio is ready for deployment!"