# Deploying Backend to Render

## Step 1: Create a New Web Service on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Bharathan-vicky/RBAC_System`
4. Configure the service:

### Build & Deploy Settings:
```
Name: rbac-backend (or any name you prefer)
Region: Choose closest to you
Branch: main
Root Directory: server
Build Command: npm install
Start Command: npm start
```

### Environment Variables:
Add these in the "Environment" section:

```
MONGO_URI = mongodb+srv://bharathanvicky_db_user:VToyC7ELmRGwynEb@cluster0.vifa1kf.mongodb.net/?appName=Cluster0

JWT_SECRET = your-super-secret-jwt-key-here-change-this

NODE_ENV = production

PORT = (leave empty, Render sets this automatically)
```

## Step 2: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment to complete (2-5 minutes)
3. Copy the backend URL (will be something like `https://rbac-backend-xyz.onrender.com`)

## Step 3: Update Frontend Environment Variable

Once backend is deployed:

1. Go to your **frontend service** on Render (`rbac-client-9ghv`)
2. Go to **Environment** tab
3. Add this variable:
   ```
   VITE_API_URL = https://rbac-backend-xyz.onrender.com
   ```
   (Replace with your actual backend URL)
4. Click **"Save Changes"**
5. Render will automatically redeploy the frontend

## Step 4: Update MongoDB Atlas

Make sure MongoDB Atlas allows Render connections:

1. Go to MongoDB Atlas → **Network Access**
2. Click **"Add IP Address"**
3. Add: `0.0.0.0/0` (Allow access from anywhere)
4. Click **"Confirm"**

## Step 5: Test

Once both services are deployed:

1. Visit your backend: `https://rbac-backend-xyz.onrender.com/api/health`
   - Should show MongoDB connection status
2. Visit your frontend: `https://rbac-client-9ghv.onrender.com`
   - Try to register/login
   - Should work now!

## Troubleshooting

If you see errors:
- Check Render logs for both services
- Verify environment variables are set correctly
- Make sure MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check that both services are "Live" (not sleeping)

## Free Tier Note

Render free tier services:
- Spin down after 15 minutes of inactivity
- Take ~30 seconds to wake up on first request
- This is normal behavior
