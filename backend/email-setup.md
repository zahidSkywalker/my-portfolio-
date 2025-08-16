# Gmail App Password Setup Guide

## Step 1: Enable 2-Factor Authentication
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the steps to enable 2FA if not already enabled

## Step 2: Generate App Password
1. Go to [Google Account settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "App passwords"
4. Select "Mail" as the app
5. Select "Other (Custom name)" as device
6. Enter "Zahidul Portfolio" as the name
7. Click "Generate"
8. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 3: Update Environment Variables
Update your `backend/.env` file:
```env
EMAIL_USER=ionzahid0987@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## Step 4: Test Email Configuration
The contact form will now send email notifications to your Gmail when someone submits a message.

## Alternative: Use Environment Variables in Production
For production deployment, set these as environment variables in your hosting platform:
- `EMAIL_USER`
- `EMAIL_PASS`
- `MONGODB_URI`