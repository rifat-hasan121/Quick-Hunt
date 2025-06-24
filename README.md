# Freelance Task Marketplace 🚀

A modern freelance task marketplace where individuals can post small tasks and freelancers can browse and bid on them based on their skills, budget, and deadlines.

🔗 **Live Website:**(https://freelance-task-marketplace.web.app/)

🔧 **Server Repository:** [Private]
🎨 **Client Repository:** [Private]
---

## 🌟 Features

- 🔐 **Authentication System** – Email/Password and Google-based login & registration with validation and toast alerts.
- 🧑‍💼 **Role-based Task Management** – Users can add, view, update, and delete their own posted tasks.
- 📋 **Task Bidding System** – Freelancers can view details and bid on tasks. Bid count increases on action.
- 📱 **Responsive UI** – Fully optimized design for mobile, tablet, and desktop screens.
- 🌗 **Theme Toggle** – Includes dark/light mode switching for better user experience.
- 🎉 **Interactive UI Enhancements** – Implemented packages like `react-awesome-reveal` and animated loaders.

---

## 🧭 Routes Overview

| Route              | Access         | Description                                     |
|-------------------|----------------|-------------------------------------------------|
| `/`               | Public         | Home page with banner, featured & extra sections |
| `/login`          | Public         | User login page with Google support             |
| `/register`       | Public         | User registration page                          |
| `/add-task`       | Private        | Add a new freelance task                        |
| `/browse-tasks`   | Public         | View all available tasks                        |
| `/task/:id`       | Private        | Task details with bidding option                |
| `/my-tasks`       | Private        | View, update, or delete own tasks               |
| `/update-task/:id`| Private        | Update a task using a form                      |
| `*`               | Public         | 404 Not Found Page                              |

---

## 🔐 Environment Variables

Make sure to add the following variables in both the client and server `.env` files:

### `.env` (Client Side)


---

## 💻 Technologies Used

- React.js, React Router, Tailwind CSS
- Node.js, Express.js, MongoDB
- Firebase Authentication
- SweetAlert2 for alerts
- React Packages: `react-awesome-reveal`, `react-loader-spinner`

---

## 📌 Deployment

- **Client:** Deployed on [Netlify](https://www.netlify.com/)
- **Server:** Deployed on [Vercel](https://vercel.com/)

---

## 📸 Screenshots

![Banner Screenshot](./screenshots/banner.png)
![Browse Tasks Screenshot](./screenshots/browse-tasks.png)

---

## 📞 Contact

- 📧 Email: your-email@example.com
- 🌐 LinkedIn: [your-linkedin](https://linkedin.com/in/yourprofile)
- 💼 Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

> 🔄 Last updated on: May 23, 2025




