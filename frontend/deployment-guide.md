# Vercel Deployment Guide

## Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

## Step 2: Build the Frontend
```bash
cd frontend
npm run build
```

## Step 3: Deploy to Vercel
```bash
# Login to Vercel (if not already logged in)
vercel login

# Deploy
vercel --prod
```

## Step 4: Configure Environment Variables
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add the following variables:
   - `REACT_APP_API_URL` = Your backend URL (e.g., https://your-backend.herokuapp.com)

## Step 5: Update API Configuration
Update the API base URL in your frontend code to use the environment variable:

```javascript
// In your API calls, use:
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

## Step 6: Custom Domain (Optional)
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Step 7: Automatic Deployments
- Connect your GitHub repository to Vercel
- Every push to main branch will trigger automatic deployment
- Preview deployments for pull requests

## Troubleshooting
- If you get build errors, check the build logs in Vercel dashboard
- Make sure all dependencies are properly installed
- Verify environment variables are set correctly