# MyAI Website - Setup Instructions

## Quick Start

### 1. Download All Files
You need to copy these files from the project:
- `/src/app/App.tsx` → save as `src/App.tsx`
- `/src/app/components/*.tsx` → save in `src/components/`
- `/src/styles/*.css` → save in `src/styles/`
- The logo: `figma:asset/81f1d01eff03020ed49590e371fd1a448191c702.png` → save as `public/logo.png`

### 2. Create New React Project
```bash
# On your computer, run:
npm create vite@latest myai-website -- --template react-ts
cd myai-website
```

### 3. Install Dependencies
```bash
npm install lucide-react motion
npm install -D tailwindcss @tailwindcss/vite
```

### 4. Configure Tailwind CSS

Create `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Create `src/styles/main.css`:
```css
@import "tailwindcss";
```

### 5. Update Main Entry Point

Edit `src/main.tsx`:
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 6. Fix Logo Imports

In all component files that import the logo, change:
```typescript
// FROM:
import logo from 'figma:asset/81f1d01eff03020ed49590e371fd1a448191c702.png';

// TO:
import logo from '/logo.png';
```

Files to update:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

### 7. Run the Project
```bash
npm run dev
```

Open `http://localhost:5173` in your browser!

### 8. Build for Production
```bash
npm run build
```

The production files will be in the `dist/` folder.

---

## 🚀 Deploy to Hosting

### Option A: Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in 1 minute!

### Option B: Netlify
1. Build the project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist/` folder
4. Done! Your site is live.

### Option C: GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/myai-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 📝 Customize Your Website

### Update Team Members
Edit `src/components/TeamSection.tsx` - add your real members!

### Change Contact Info
Edit `src/components/Footer.tsx` - update email and social links

### Modify Content
Edit `src/components/HeroSection.tsx` - change the about text

### Add/Remove Activities
Edit `src/components/ActivitiesSection.tsx` - customize what your club does

---

## 🆘 Need Help?

Common issues:
- **Logo not showing**: Make sure you saved the logo as `public/logo.png`
- **Styles not working**: Check that Tailwind is configured in `vite.config.ts`
- **Import errors**: Verify all component files are in `src/components/`

Good luck with your MyAI website! 🧠✨
