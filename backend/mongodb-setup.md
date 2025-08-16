# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project called "Zahidul Portfolio"

## Step 2: Create a Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region close to you
5. Click "Create"

## Step 3: Set Up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Username: `zahidul-portfolio-user`
4. Password: Generate a strong password
5. Role: "Read and write to any database"
6. Click "Add User"

## Step 4: Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

## Step 5: Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `zahidul-portfolio`

## Step 6: Update Environment Variables
Update your `backend/.env` file:
```env
MONGODB_URI=mongodb+srv://zahidul-portfolio-user:your-password@cluster0.xxxxx.mongodb.net/zahidul-portfolio?retryWrites=true&w=majority
```

## Step 7: Test Connection
Run the backend server to test the connection:
```bash
cd backend
npm run dev
```

You should see: "MongoDB connected successfully"