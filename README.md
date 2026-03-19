# Graphicko Website

A modern, fully responsive creative agency website built with **React + Vite**.  
Ready to open in VS Code and deploy to Hostinger, Vercel, or any static host.

---

## 🚀 Quick Start (VS Code)

### 1. Prerequisites
Install **Node.js** (version 18 or higher): https://nodejs.org

### 2. Open in VS Code
```
File → Open Folder → select the `graphicko` folder
```

### 3. Open Terminal in VS Code
```
Terminal → New Terminal  (or Ctrl + `)
```

### 4. Install dependencies
```bash
npm install
```

### 5. Start the development server
```bash
npm run dev
```

Open your browser at **http://localhost:5173** — the site is live! ✅

---

## 📁 Project Structure

```
graphicko/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Layout.jsx        ← Page wrapper
│   │       ├── Navbar.jsx        ← Navigation bar
│   │       └── Footer.jsx        ← Site footer
│   ├── pages/
│   │   ├── Home.jsx              ← Home page
│   │   ├── Services.jsx          ← Services page
│   │   ├── Portfolio.jsx         ← Portfolio with filter
│   │   ├── About.jsx             ← About us page
│   │   ├── Contact.jsx           ← Contact form
│   │   ├── CaseStudies.jsx       ← Case studies page
│   │   └── Blog.jsx              ← Blog listing page
│   ├── App.jsx                   ← Router setup
│   ├── main.jsx                  ← Entry point
│   └── index.css                 ← Global styles & design system
├── index.html
├── vite.config.js
└── package.json
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist/` folder with your static website files.

---

## 🌐 Deploy to Hostinger

### Option A — Static Site (recommended)
1. Run `npm run build`
2. Upload the **contents** of the `dist/` folder to your Hostinger public_html folder via File Manager or FTP
3. Done! ✅

### Option B — Node.js Hosting
1. Upload the full project to Hostinger
2. Set the startup command to: `npm install && npm run build`
3. Set the web root to the `dist/` folder

### Important: Fix page refresh on Hostinger
Add a `.htaccess` file to your `public/` folder (it will be copied to `dist/`):

Create `public/.htaccess`:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

---

## 🎨 Customisation

### Change brand name
Search and replace `Graphicko` with your brand name across all files.

### Change primary colour
In `src/index.css`, update the `--primary` variable:
```css
:root {
  --primary: #0052ff;  ← change this hex colour
}
```

### Add your real images
Replace the coloured placeholder cards in `Portfolio.jsx` with real `<img>` tags:
```jsx
<img src="/images/your-project.jpg" alt="Project Name" />
```
Put your images in the `public/images/` folder.

### Update contact details
Edit `src/pages/Contact.jsx` — update the email, location, etc.

### Add your social media links
Edit `src/components/layout/Footer.jsx` — update the `href="#"` links.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Vite 5 | Build tool (fast!) |
| CSS Modules | Scoped component styles |
| Google Fonts | Syne + DM Sans typography |

No extra dependencies. No TypeScript required. Runs anywhere.
