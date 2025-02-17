# 🚀 Personal Portfolio & Blog with Next.js

## 📌 Project Overview
This is a **Personal Portfolio and Blog Website** built using **Next.js**. The project serves as a personal portfolio to showcase skills, projects, and blog posts while also featuring an authentication-protected dashboard for content management.

## 🎯 Features

### 🌍 Public Pages (Accessible to All Users)
- **Home Page (`/`)**
  - Display portfolio introduction (name, bio, profile picture).
  - Showcase skills using icons or a skill bar.
  - Highlight featured projects.
  - Resume download button.
- **Projects Page (`/projects`)**
  - List of projects with images, descriptions, and links.
  - Clicking on a project opens a detailed page (`/projects/[id]`).
- **Blog Page (`/blog`)**
  - Display a list of blogs (fetched from an API or JSON file).
  - Clicking on a blog opens a detailed page (`/blog/[id]`).
- **Contact Page (`/contact`)**
  - Simple contact form (name, email, message).
  - Save messages in local storage or a database.

### 🔒 Dashboard (Only for Logged-in Users)
- **Login (`/dashboard`)**
  - Social login using NextAuth.
  - Only authenticated users can access the dashboard.
- **Blog Management (`/dashboard/blogs`)**
  - CRUD (Create, Read, Update, Delete) blog posts.
  - Form with fields like title, content, image, and category.
- **Project Management (`/dashboard/projects`)**
  - CRUD operations for projects.
  - Upload project image, title, live link, descriptions, etc.
- **Message Management (`/dashboard/messages`)**
  - View messages submitted from the contact form.

## 🛠 Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Authentication:** NextAuth
- **Database:** MongoDB 

