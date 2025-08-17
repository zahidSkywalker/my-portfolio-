#!/bin/bash

echo "🚀 Building Zahidul's Portfolio..."

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Build the frontend
echo "🔨 Building frontend..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful! Build directory found."
    ls -la build/
else
    echo "❌ Build failed! No build directory found."
    exit 1
fi

echo "🎉 Build completed successfully!"