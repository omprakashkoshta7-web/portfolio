# Backend Deployment Guide

## Render Configuration Issue Fix

The error you're seeing is because Render is looking in the wrong path. Here's the fix:

### In Render Dashboard:

1. **Root Directory**: Leave empty or set to `/`
2. **Build Command**: 
   ```
   npm install && npm run build
   ```
3. **Start Command**: 
   ```
   npm start
   ```

### Important: Check your GitHub repository structure

Your backend code should be in the ROOT of the repository, not in a `server` folder. The structure should be:

```
portfolio-backend/          (repository root)
├── src/
│   ├── models/
│   ├── routes/
│   └── server.ts
├── package.json
├── tsconfig.json
└── .env
```

NOT like this:
```
portfolio-backend/
└── server/              ❌ Wrong!
    └── src/
```

---

## Quick Deploy Options

### Option 1: Deploy to Render (Recommended - Free Tier Available)

1. **Push to GitHub**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial backend commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: portfolio-backend
     - **Environment**: Node
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

3. **Add Environment Variables** (in Render Dashboard)
   ```
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   MONGODB_URI=mongodb+srv://snehakoshta051_db_user:sk2004@cluster0.mzbc1sv.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
   EMAIL_USER=snehakoshta1@gmail.com
   EMAIL_PASS=esyb jzaj umsm isaq
   ```

4. **Deploy!** - Render will automatically deploy
   - Your API will be at: `https://portfolio-backend-xxxx.onrender.com`

---

### Option 2: Deploy to Railway

1. **Push to GitHub** (same as above)

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Node.js

3. **Add Environment Variables** (in Railway Dashboard)
   - Same variables as Render

4. **Deploy!** - Railway will automatically deploy
   - Your API will be at: `https://portfolio-backend-production.up.railway.app`

---

### Option 3: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd backend
   vercel
   ```

3. **Add Environment Variables**
   ```bash
   vercel env add MONGODB_URI
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add FRONTEND_URL
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## After Deployment

### 1. Update Frontend API URL

In your frontend code (`client/src/components/Contact.tsx`), update the API URL:

```typescript
const response = await fetch('https://your-backend-url.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

### 2. Update CORS Settings

In Render/Railway dashboard, update `FRONTEND_URL` to your deployed frontend URL:
```
FRONTEND_URL=https://your-portfolio.vercel.app
```

### 3. Test Your API

Visit: `https://your-backend-url.onrender.com/api/health`

You should see:
```json
{
  "status": "Server is running",
  "mongodb": "Connected",
  "email": "Configured",
  "timestamp": "2024-..."
}
```

---

## MongoDB Atlas Setup (If Not Done)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create account and cluster
3. Database Access → Add User:
   - Username: `snehakoshta051_db_user`
   - Password: `sk2004`
4. Network Access → Add IP:
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Get connection string from "Connect" button

---

## Troubleshooting

### MongoDB Connection Issues
- Check if IP whitelist includes 0.0.0.0/0
- Verify username and password in connection string
- Ensure cluster is not paused

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2FA is enabled on Gmail
- Generate new App Password if needed

### CORS Errors
- Update `FRONTEND_URL` in environment variables
- Ensure frontend URL matches exactly (no trailing slash)

---

## Local Testing

```bash
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5000`

Test endpoints:
- Health: `http://localhost:5000/api/health`
- Contact: `POST http://localhost:5000/api/contact`

---

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | production |
| FRONTEND_URL | Frontend URL for CORS | https://portfolio.vercel.app |
| MONGODB_URI | MongoDB connection string | mongodb+srv://... |
| EMAIL_USER | Gmail address | your-email@gmail.com |
| EMAIL_PASS | Gmail App Password | xxxx xxxx xxxx xxxx |

---

## Support

For issues, check:
1. Render/Railway logs
2. MongoDB Atlas metrics
3. Gmail App Password validity

Your backend is now ready for deployment! 🚀
