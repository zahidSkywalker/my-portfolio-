#!/bin/bash

echo "🔍 zahidSkywalker Portfolio - Docker Validation"
echo "=============================================="

# Check if required files exist
echo "📁 Checking required files..."

required_files=(
    "Dockerfile"
    "docker-compose.yml"
    "package.json"
    "frontend/package.json"
    "frontend/public/index.html"
    "nginx.conf"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Check package.json for required scripts
echo ""
echo "📦 Checking package.json scripts..."

if grep -q '"build"' package.json; then
    echo "✅ Root build script exists"
else
    echo "❌ Root build script missing"
fi

if grep -q '"build"' frontend/package.json; then
    echo "✅ Frontend build script exists"
else
    echo "❌ Frontend build script missing"
fi

# Check Dockerfile for common issues
echo ""
echo "🐳 Checking Dockerfile..."

if grep -q "FROM node:" Dockerfile; then
    echo "✅ Node.js base image specified"
else
    echo "❌ Node.js base image not found"
fi

if grep -q "EXPOSE 3000" Dockerfile; then
    echo "✅ Port 3000 exposed"
else
    echo "❌ Port 3000 not exposed"
fi

if grep -q "npm run build" Dockerfile; then
    echo "✅ Build command included"
else
    echo "❌ Build command missing"
fi

# Check docker-compose.yml
echo ""
echo "🐙 Checking docker-compose.yml..."

if grep -q "zahidSkywalker-portfolio" docker-compose.yml; then
    echo "✅ Service name updated to zahidSkywalker-portfolio"
else
    echo "❌ Service name not updated"
fi

if grep -q "3000:3000" docker-compose.yml; then
    echo "✅ Port mapping configured"
else
    echo "❌ Port mapping missing"
fi

echo ""
echo "🎉 Docker validation complete!"
echo "💡 Run './docker-test.sh' to build and test your containers"