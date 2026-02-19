# Render Deployment Fix

## Problem
Error: `Cannot find module '/opt/render/project/src/server/dist/server.js'`

This means Render is looking in the wrong path because you deployed the entire portfolio project instead of just the backend folder.

## Solution: Deploy Backend Separately

### Option 1: Create Separate GitHub Repository (Recommended)

1. **Create new repository on GitHub**
   - Name: `portfolio-backend`
   - Make it public or private

2. **Push ONLY backend folder to new repo**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial backend commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
   git push -u origin main
   ```

3. **Deploy on Render**
   - Go to Render Dashboard
   - Delete old service (if exists)
   - Click "New +" → "Web Service"
   - Connect the NEW `portfolio-backend` repository
   - Settings:
     - **Name**: portfolio-backend
     - **Root Directory**: (leave empty)
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

4. **Add Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   MONGODB_URI=mongodb+srv://snehakoshta051_db_user:sk2004@cluster0.mzbc1sv.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0
   EMAIL_USER=snehakoshta1@gmail.com
   EMAIL_PASS=esyb jzaj umsm isaq
   ```

---

### Option 2: Use Root Directory Setting (If using same repo)

If you want to keep backend in the same repository:

1. **In Render Dashboard**
   - Go to your service settings
   - Find "Root Directory" setting
   - Set it to: `backend`
   - Save changes

2. **Redeploy**
   - Click "Manual Deploy" → "Deploy latest commit"

---

### Option 3: Quick Fix - Update package.json

If Render is looking for `/opt/render/project/src/server/dist/server.js`, update the start command:

In Render Dashboard:
- **Start Command**: `node server/dist/server.js`

But this is NOT recommended. Better to use Option 1 or 2.

---

## Verify Deployment

After successful deployment, test:

```bash
curl https://portfolio-1-xrg5.onrender.com/api/health
```

Should return:
```json
{
  "status": "Server is running",
  "mongodb": "Connected",
  "email": "Configured"
}
```

---

## Current Repository Structure Issue

Your current structure is probably:
```
portfolio/
├── client/
├── server/
└── backend/    ← New backend folder
```

Render is confused because it sees multiple folders. 

**Best Solution**: Create a separate repository with ONLY the backend folder contents.
