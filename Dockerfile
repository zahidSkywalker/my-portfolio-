# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm install
RUN cd frontend && npm install

# Copy source code
COPY . .

# Build the frontend
RUN cd frontend && npm run build

# Install serve to run the built app
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create a script to start the application
RUN echo '#!/bin/sh\n\
echo "Starting Zahidul Portfolio..."\n\
echo "Portfolio will be available at: http://localhost:3000"\n\
echo "To access from other devices, use your computer IP address"\n\
cd frontend && serve -s build -l 3000' > /app/start.sh

# Make the script executable
RUN chmod +x /app/start.sh

# Set the entrypoint
ENTRYPOINT ["/app/start.sh"]