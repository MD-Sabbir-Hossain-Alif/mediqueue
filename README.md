# MediQueue – Tutor Booking System

🌐 **Live Site:** [https://mediqueue-gamma.vercel.app](https://mediqueue-gamma.vercel.app)

📦 **Server Repository:** [https://github.com/MD-Sabbir-Hossain-Alif/mediqueue-server](https://github.com/MD-Sabbir-Hossain-Alif/mediqueue-server)

---

## About MediQueue

MediQueue is a modern tutor booking web application where students can register, browse available tutors, and book online or offline learning sessions based on subject and time availability. The system generates digital session tokens for each booking and allows users to manage their scheduled classes efficiently.

---

## ✨ Key Features

- **Smart Tutor Booking System** – Students can browse tutors by subject and time slot, book sessions with a single click, and receive a unique session token. The system automatically tracks slot availability and prevents overbooking by decreasing total slots after each confirmed booking.

- **Secure Authentication with JWT** – Full email/password and Google OAuth login powered by Better Auth. JSON Web Tokens (JWT) are issued on login and sent with every protected request, ensuring private routes (Add Tutor, My Tutors, My Booked Sessions) are accessible only to verified users.

- **Real-Time Search & Filter** – The Tutors page supports live name-based search using MongoDB's `$regex` operator (case-insensitive), plus date-range filtering with `$gte`/`$lte` operators, so students can quickly find the right tutor for their schedule.

- **Full CRUD for Tutors** – Logged-in users can add new tutors via a rich form (with date picker, dropdowns, and image upload), update tutor details through a pre-filled modal without page reload, and delete entries with a confirmation prompt — all with toast notifications for every action.

- **Dark / Light Theme Toggle** – A persistent theme switcher in the navbar lets users toggle between dark and light modes across the entire application, powered by `next-themes` for a smooth and accessible experience.

- **Responsive & Animated UI** – Built with Next.js 16, Tailwind CSS v4, shadcn/ui, and GSAP animations, the interface is fully responsive across mobile, tablet, and desktop. Smooth transitions and a consistent design language are maintained throughout all pages.

- **Session Management & Booking History** – The My Booked Sessions page shows each student only their own bookings in a table format, with the ability to cancel a session through a confirmation modal that updates the booking status in real time via a PATCH request.

---

## 🛠️ Tech Stack

### Frontend (Client)

| Category       | Technologies                                                           |
| -------------- | ---------------------------------------------------------------------- |
| Framework      | Next.js 16, React 19                                                   |
| Styling        | Tailwind CSS v4, shadcn/ui, Radix UI                                   |
| Animation      | GSAP, React Spring, tw-animate-css                                     |
| Authentication | Better Auth, JWT (jsonwebtoken)                                        |
| Database       | MongoDB                                                                |
| Forms          | React Hook Form, Zod, @hookform/resolvers                              |
| Date Handling  | date-fns, react-day-picker                                             |
| UI Extras      | Swiper, react-fast-marquee, lucide-react, react-icons, Sonner (toasts) |

### Backend (Server)

| Category       | Technologies          |
| -------------- | --------------------- |
| Runtime        | Node.js               |
| Framework      | Express.js 5          |
| Database       | MongoDB               |
| Authentication | JOSE (JWT — jose-cjs) |
| Config         | dotenv                |
| CORS           | cors                  |
| Dev Tools      | nodemon               |

---

## 📁 Project Structure

```
mediqueue/
├── app/                  # Next.js App Router pages & API routes
├── components/           # Reusable UI components
├── lib/                  # Auth, DB connection, utilities
├── public/               # Static assets
└── ...config files
```

---

## 📄 License

This project was built as part of a programming hero assignment. All rights reserved © MD Sabbir Hossain Alif.
