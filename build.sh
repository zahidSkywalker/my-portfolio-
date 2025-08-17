#!/bin/bash

echo "🚀 Starting build process..."

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build directory exists
if [ -d "build" ]; then
    echo "✅ Build successful! Build directory found."
    ls -la build/
else
    echo "❌ Build failed! Build directory not found."
    exit 1
fi

echo "🎉 Build process completed!"