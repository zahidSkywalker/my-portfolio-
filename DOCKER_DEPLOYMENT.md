# 🐳 Docker Deployment Guide

This guide will help you deploy Zahidul's Portfolio using Docker, making it accessible from anywhere on any device.

## 📋 Prerequisites

- **Docker** installed on your system
- **Docker Compose** (usually comes with Docker Desktop)
- **Git** to clone the repository

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/zahidSkywalker/my-portfolio.git
cd my-portfolio
```

### 2. Build and Run with Docker Compose
```bash
# Build and start the portfolio
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

### 3. Access Your Portfolio
- **Local access**: http://localhost:3000
- **Network access**: http://YOUR_COMPUTER_IP:3000

## 🌐 Making it Accessible from Anywhere

### Option 1: Local Network Access
1. **Find your computer's IP address:**
   ```bash
   # On Windows
   ipconfig
   
   # On Mac/Linux
   ifconfig
   # or
   ip addr show
   ```

2. **Access from other devices:**
   - Phone: `http://YOUR_COMPUTER_IP:3000`
   - Other computers: `http://YOUR_COMPUTER_IP:3000`

### Option 2: Internet Access (Port Forwarding)
1. **Configure your router:**
   - Log into your router admin panel
   - Find "Port Forwarding" settings
   - Add rule: Port 3000 → Your computer's IP
   - Protocol: TCP

2. **Access from anywhere:**
   - `http://YOUR_PUBLIC_IP:3000`

### Option 3: Cloud Deployment
1. **Deploy to cloud platforms:**
   - **AWS**: Use EC2 with Docker
   - **Google Cloud**: Use Compute Engine
   - **DigitalOcean**: Use Droplets
   - **Azure**: Use Container Instances

## 🐳 Docker Commands

### Basic Commands
```bash
# Build the image
docker build -t zahidul-portfolio .

# Run the container
docker run -p 3000:3000 zahidul-portfolio

# Stop the container
docker stop zahidul-portfolio

# Remove the container
docker rm zahidul-portfolio

# View logs
docker logs zahidul-portfolio
```

### Docker Compose Commands
```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs zahidul-portfolio
```

## 🔧 Configuration Options

### Environment Variables
Create a `.env` file for custom configuration:
```env
NODE_ENV=production
PORT=3000
```

### Custom Port
To run on a different port:
```bash
# Using docker run
docker run -p 8080:3000 zahidul-portfolio

# Using docker-compose (edit docker-compose.yml)
ports:
  - "8080:3000"
```

## 🛡️ Production Deployment

### With Nginx (Recommended)
```bash
# Start with nginx reverse proxy
docker-compose --profile production up -d
```

This will:
- ✅ Serve on port 80 (HTTP)
- ✅ Add security headers
- ✅ Enable gzip compression
- ✅ Cache static assets
- ✅ Load balancing ready

### SSL/HTTPS Setup
1. **Get SSL certificates** (Let's Encrypt)
2. **Place certificates** in `./ssl/` directory
3. **Uncomment HTTPS section** in `nginx.conf`
4. **Update domain name** in nginx configuration
5. **Restart with production profile**

## 📱 Mobile Access

### From Your Phone
1. **Connect to same WiFi** as your computer
2. **Open browser** on your phone
3. **Navigate to**: `http://YOUR_COMPUTER_IP:3000`

### From Any Device
1. **Set up port forwarding** on your router
2. **Use your public IP**: `http://YOUR_PUBLIC_IP:3000`

## 🔍 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process or use different port
docker run -p 3001:3000 zahidul-portfolio
```

#### Container Won't Start
```bash
# Check logs
docker logs zahidul-portfolio

# Rebuild image
docker-compose up --build --force-recreate
```

#### Can't Access from Other Devices
1. **Check firewall settings**
2. **Verify port forwarding**
3. **Ensure devices are on same network**

### Debug Commands
```bash
# Check container status
docker ps

# Check container details
docker inspect zahidul-portfolio

# Access container shell
docker exec -it zahidul-portfolio sh

# Check network connectivity
docker network ls
docker network inspect portfolio-network
```

## 🚀 Advanced Deployment

### Docker Swarm (Multiple Servers)
```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml portfolio
```

### Kubernetes
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/
```

## 📊 Monitoring

### Health Check
The container includes a health check endpoint:
- **URL**: `http://localhost:3000/health`
- **Response**: `{"status": "healthy", "timestamp": "..."}`

### Logs
```bash
# View real-time logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f zahidul-portfolio
```

## 🔄 Updates

### Update the Application
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose up --build -d
```

### Update Docker Image
```bash
# Pull latest base image
docker pull node:18-alpine

# Rebuild
docker-compose build --no-cache
```

## 📞 Support

If you encounter issues:
1. **Check the logs**: `docker-compose logs`
2. **Verify configuration**: Check all files are present
3. **Test locally**: Ensure it works on localhost first
4. **Contact**: ionzahid0987@gmail.com

---

## 🎉 Success!

Your portfolio is now:
- ✅ **Containerized** and portable
- ✅ **Accessible** from any device
- ✅ **Production-ready** with nginx
- ✅ **Scalable** for future growth
- ✅ **Secure** with proper headers

**Happy deploying! 🚀**