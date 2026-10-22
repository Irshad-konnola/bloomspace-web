<div align="center">

# ✨ Bloomspace Design — Headless Digital Showroom & Lead Platform

**A high-conversion digital showroom engineered for an Abu Dhabi interior design brand, powered by Next.js, Sanity Headless CMS, Framer Motion, and Snapchat Pixel conversion tracking.**

[![Live Site](https://img.shields.io/badge/Live_Site-bloomspacedesign.com-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bloomspacedesign.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Sanity CMS](https://img.shields.io/badge/Sanity_CMS-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[**🚀 Visit Live Showroom (bloomspacedesign.com)**](https://bloomspacedesign.com/) • [Architecture](#the-problem--solution) • [Key Features](#key-features) • [Local Setup](#getting-started-local-development)

</div>

---

## 📸 Showroom Preview

<!-- Tip: Drag and drop 2 screenshots of bloomspacedesign.com directly into the GitHub README editor -->
| Editorial Hero & Luxury Aesthetic | Dynamic Sanity CMS Project Gallery |
| :---: | :---: |
| <img width="1901" height="862" alt="Screenshot 2026-10-22 102401" src="https://github.com/user-attachments/assets/fcef1478-94c4-40f1-a1f3-2bccc2ee7df0" /> | <img width="1910" height="856" alt="Screenshot 2026-10-22 104012" src="https://github.com/user-attachments/assets/53f1d5b1-1c1b-4fc8-99e1-42bb9df498db" /> |

---

## 💡 The Problem & Solution

Luxury interior design firms in the UAE require a visual-first digital presence capable of serving high-resolution architectural photography without sacrificing mobile page speed, while enabling non-technical design teams to publish new project portfolios independently.

**Bloomspace Web** delivers a decoupled headless architecture tailored for the Abu Dhabi market:
- **Decoupled Content Pipeline (`Sanity CMS`):** Enables the client team to upload new residential and commercial fit-out projects, before/after galleries, and regional client testimonials in real time without developer intervention.
- **Ad-Spend Attribution (`Snapchat Pixel`):** Integrated custom conversion events for regional social media ad campaigns in the UAE, tracking user progression from portfolio view to consultation booking.
- **Zero-Friction Lead Capture:** Serverless form handling via **Netlify Forms** with instant client validation and automated inquiry notifications.

---

## ✨ Key Features

- **🏛️ Headless CMS Studio:** Custom Sanity.io schemas for interior project categories, high-resolution image galleries, and regional testimonials.
- **🎞️ Editorial Motion Design:** Fluid scroll-linked reveals, parallax image transitions, and micro-interactions built with **Framer Motion**.
- **📈 Regional Marketing & Pixel Tracking:** Production **Snapchat Pixel** integration for audience retargeting and consultation conversion tracking across Abu Dhabi and the UAE.
- **🖼️ Next-Gen Media Optimization:** Responsive WebP/AVIF delivery and lazy-loaded masonry layouts that keep visual galleries fast on mobile networks.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | Next.js, React, Tailwind CSS, Framer Motion |
| **Headless CMS** | Sanity.io (GROQ Queries & Sanity Studio) |
| **Forms & Marketing Analytics** | Netlify Forms, Snapchat Pixel Tracking, SEO Metadata |
| **Deployment** | Netlify / CDN |

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository
```bash
git clone [https://github.com/Irshad-konnola/bloomspace-web.git](https://github.com/Irshad-konnola/bloomspace-web.git)
cd bloomspace-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Add your Sanity CMS and Pixel configuration:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SNAPCHAT_PIXEL_ID=your_snapchat_pixel_id
```

### 4. Start the development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 📄 License
All brand assets belong to Bloomspace Design (Abu Dhabi, UAE). Engineered by [Irshad Konnola](https://irshadkonnola.vercel.app/).
