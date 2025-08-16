# Railway Deployment Guide

## Step 1: Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up with your GitHub account
3. Create a new project

## Step 2: Connect GitHub Repository
1. Click "Deploy from GitHub repo"
2. Select your portfolio repository
3. Choose the `backend` directory as the source

## Step 3: Configure Environment Variables
1. Go to your Railway project dashboard
2. Click "Variables" tab
3. Add the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-connection-string
   EMAIL_USER=ionzahid0987@gmail.com
   EMAIL_PASS=your-gmail-app-password
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

## Step 4: Deploy
1. Railway will automatically detect the Node.js project
2. It will install dependencies and start the server
3. You'll get a deployment URL (e.g., https://your-app.railway.app)

## Step 5: Update Frontend API URL
1. Copy your Railway deployment URL
2. Update your frontend environment variable:
   ```
   REACT_APP_API_URL=https://your-app.railway.app
   ```

## Step 6: Test the API
Test your API endpoints:
- `https://your-app.railway.app/` - Should return API status
- `https://your-app.railway.app/api/contact` - Contact form endpoint

## Step 7: Custom Domain (Optional)
1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS settings

## Troubleshooting
- Check Railway logs for any deployment errors
- Verify all environment variables are set correctly
- Make sure MongoDB Atlas allows connections from Railway's IP addresses
- Test the API endpoints after deployment

## Alternative: Heroku Deployment
If you prefer Heroku:

1. Install Heroku CLI
2. Create a new Heroku app
3. Set environment variables in Heroku dashboard
4. Deploy using:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```