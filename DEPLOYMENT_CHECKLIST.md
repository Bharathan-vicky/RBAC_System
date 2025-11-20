# Deployment Checklist for Render

## ✅ What We Just Fixed
- Increased MongoDB connection timeout from 5s to 30s
- Added socket timeout of 45s
- Automatically adds database name (`rbac_db`) to MongoDB Atlas URI
- Uses IPv4 for better compatibility

## 🔧 Required Environment Variables on Render

### Backend Service (Server)
Make sure these environment variables are set in your Render backend service:

1. **MONGO_URI**
   ```
   mongodb+srv://bharathanvicky_db_user:VToyC7ELmRGwynEb@cluster0.vifa1kf.mongodb.net/?appName=Cluster0
   ```

2. **JWT_SECRET**
   ```
   your-secret-key-here
   ```

3. **PORT** (usually auto-set by Render)
   ```
   5000
   ```

4. **NODE_ENV** (optional but recommended)
   ```
   production
   ```

### Frontend Service (Client)
Make sure this environment variable is set:

1. **VITE_API_URL**
   ```
   https://your-backend-service-url.onrender.com
   ```
   (Replace with your actual Render backend URL)

## 📋 Steps to Update Render Environment Variables

1. Go to https://dashboard.render.com
2. Select your **backend service**
3. Go to **Environment** tab
4. Add/Update the variables listed above
5. Click **Save Changes**
6. Render will automatically redeploy

## 🔍 MongoDB Atlas IP Whitelist

Make sure MongoDB Atlas allows connections from anywhere:
1. Go to MongoDB Atlas Dashboard
2. Navigate to **Network Access**
3. Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
   - This is needed because Render uses dynamic IPs

## 🚀 After Deployment

Once Render finishes deploying (usually 2-5 minutes):
1. Check the backend logs for "MongoDB Connected to: cluster0.vifa1kf.mongodb.net/rbac_db"
2. Test the registration endpoint
3. Your live site should work!

## 🐛 Troubleshooting

If you still see timeout errors:
- Check Render logs for connection errors
- Verify MONGO_URI is set correctly (no typos)
- Ensure MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check if MongoDB Atlas cluster is active (not paused)
