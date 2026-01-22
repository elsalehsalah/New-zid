# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Alternative Deployment Options

### Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy:**
   ```bash
   netlify login
   netlify deploy --prod
   ```

### Self-Hosted (VPS/Server)

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "zid" -- start
   pm2 save
   pm2 startup
   ```

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] **Test the build locally:**
  ```bash
  npm run build
  npm start
  ```
  Visit `http://localhost:3000` and test all features

- [ ] **Environment variables** (if any):
  - Add them in Vercel dashboard: Settings → Environment Variables
  - Or create `.env.production` file

- [ ] **Optimize images:**
  - All images should be optimized
  - External images are configured in `next.config.ts` ✅

- [ ] **Check for errors:**
  ```bash
  npm run lint
  ```

- [ ] **Test light/dark mode toggle**
- [ ] **Test all navigation links**
- [ ] **Test responsive design on mobile**

---

## 🔧 Production Optimizations

### 1. Enable Analytics (Optional)

Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  // ... existing config
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};
```

### 2. Add Custom Domain

In Vercel:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### 3. Enable Automatic Deployments

- Push to `main` branch = Production deployment
- Push to other branches = Preview deployment

---

## 📝 Quick Start Commands

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (if using CLI)
vercel --prod
```

---

## 🆘 Troubleshooting

**Build fails?**
- Check for TypeScript errors: `npm run build`
- Check for missing dependencies
- Ensure all environment variables are set

**Images not loading?**
- Verify `next.config.ts` has all image domains
- Check image URLs are correct

**Performance issues?**
- Run Lighthouse audit
- Optimize images
- Check bundle size: `npm run build` shows sizes

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com)

