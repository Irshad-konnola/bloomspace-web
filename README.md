# 🏡 BloomSpace – Interior Design Website

A premium, modern frontend website built for an interior design company, focused on clean UI, smooth animations, and conversion-driven design.

🔗 **Live Demo**: https://bloomspacedesign.com/  

---

## ✨ Overview

BloomSpace is a high-quality multi-page website designed to showcase interior design services and projects with a strong focus on visual aesthetics and user experience.

This project emphasizes:
- Clean and modern UI
- Smooth user interactions
- Performance and responsiveness
- Lead generation
- Content Management Sytem

---

## 🚀 Features

- 🏡 Multi-page layout (Home, About, Services, Gallery, Contact)
- 🎨 Premium and modern UI design
- 🎬 Smooth animations using Framer Motion
- 🧩 Reusable components with shadcn/ui
- 📱 Fully responsive across all devices
- 📩 Contact form powered by Netlify Forms
- 📊 Snapchat Pixel integration for tracking
- ⚡ Optimized performance with Next.js

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16  
- **Frontend:** React 19
- **CMS:** Sanity.io (Headless CMS for dynamic project management) 
- **Styling:** Tailwind CSS 4  
- **UI Components:** shadcn/ui + Radix UI  
- **Animations:** Framer Motion  
- **Icons:** Lucide React + Phosphor Icons  
- **Forms:** Netlify Forms  
- **Tracking:** Snapchat Pixel
- **DevOps**: GitHub Actions (CI/CD), Netlify Build Hooks (On-demand revalidation) 
---

## 📸 Screenshots

### 🏠 Home Page
![Home](./public/screenshots/home.png)

### 🛋️ Featured Projects Preview
![Services](./public/screenshots/projects.png)

### 🖼️ Services Page
![Gallery](./public/screenshots/services.png)

### 📩 Contact Page
![Contact](./public/screenshots/contact.png)

---

## 📂 Project Structure


├── app/
│   ├── (website)/      # Route Group for public site (Layout with Navbar/Footer)
│   ├── admin/          # Route Group for Sanity Studio (Clean layout)
│   └── api/            # Backend routes
├── components/         # Reusable UI components
├── sanity/             # Schema definitions and CMS config
├── .github/workflows/  # CI/CD Pipeline (GitHub Actions)
└── .env.example        # Template for environment variables

---

## 🚀 Advanced DevOps Features (Add this section!)
- **CI/CD Pipeline** Automated linting and type-checking on every Pull Request via GitHub Actions.

- **Staging Environment** Automated branch deployments for testing features before production.

- **On-Demand Revalidation** Real-time content updates using Sanity Webhooks and Netlify Build Hooks (ISR).

- **Performance** Optimized LCP with Next.js Image component and calculated sizes props.

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Irshad-konnola/bloomspace-web.git
cd bloomspace-web
npm install
npm run dev

🎯 Key Highlights

Built for a real-world freelance client
Focused on conversion and lead generation
Clean, scalable frontend architecture
Smooth animations and premium UI experience

📊 Performance

⚡ Fast loading and optimized UI
📱 Mobile-first responsive design
🎯 UX-focused layout and structure
🧠 Concept

Designed to reflect a premium interior design brand, using clean layouts, strong typography, and smooth motion to create an engaging user experience.

🚧 Status

🚧 95% Complete

👨‍💻 Author

Irshad
Frontend Developer (React / Next.js)

LinkedIn: https://www.linkedin.com/in/irshad-konnola-954516226
Email: irshadkonnola.dev@gmail.com

⭐ Support

If you like this project, give it a ⭐ on GitHub!
