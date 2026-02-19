# Vercel Deployment Guide

## Deploy Frontend to Vercel

### Option 1: Using Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   cd client
   git init
   git add .
   git commit -m "Portfolio frontend"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-frontend.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (or leave empty)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **Add Environment Variable**
   - In Vercel project settings
   - Go to "Environment Variables"
   - Add:
     - **Name**: `VITE_API_URL`
     - **Value**: `https://ecommerce-7-z18z.onrender.com`
     - **Environment**: Production, Preview, Development

4. **Deploy!**
   - Click "Deploy"
   - Your site will be live at: `https://your-project.vercel.app`

---

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from client folder**
   ```bash
   cd client
   vercel
   ```

4. **Add Environment Variable**
   ```bash
   vercel env add VITE_API_URL
   # Enter: https://ecommerce-7-z18z.onrender.com
   # Select: Production, Preview, Development
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## After Deployment

### Update Backend CORS

Your backend needs to allow requests from your Vercel domain.

In your backend `.env` or Render environment variables:
```
FRONTEND_URL=https://your-portfolio.vercel.app
```

Then update backend `src/server.ts` CORS config (already done):
```typescript
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
};
```

---

## Test Your Deployment

1. Visit your Vercel URL
2. Go to Contact section
3. Submit a test message
4. Check if email is received

---

## Troubleshooting

### Build Fails with TypeScript Error
- Make sure `vite-env.d.ts` exists in `src/` folder
- Check that `tsconfig.json` includes `"include": ["src"]`

### API Requests Fail (CORS Error)
- Update `FRONTEND_URL` in backend environment variables
- Redeploy backend after updating

### Environment Variable Not Working
- Make sure variable name starts with `VITE_`
- Redeploy after adding environment variables
- Check Vercel logs for errors

---

## Custom Domain (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update backend `FRONTEND_URL` to your custom domain

---

Your portfolio is now live! 🚀
