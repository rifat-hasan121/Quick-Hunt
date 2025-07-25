# Freelance Task Marketplace 🚀

A modern freelance task marketplace where individuals can post small tasks and freelancers can browse and bid on them based on their skills, budget, and deadlines.

🔗 **Live Website:** [https://freelance-task-marketplace.web.app](https://freelance-task-marketplace.web.app)  
🔗 **Server Website:** [https://freelance-task-marketplace.web.app](https://freelance-task-marketplace.web.app)

🔧 **Server Repository:** [https://github.com/rifat-hasan121/Quick-Hunt-Server](https://github.com/rifat-hasan121/Quick-Hunt-Server)

---

## 🌟 Features

- 🔐 **Authentication System** – Email/Password and Google-based login & registration with validation and toast alerts  
- 🧑‍💼 **Role-based Task Management** – Users can add, view, update, and delete their own posted tasks  
- 📋 **Task Bidding System** – Freelancers can view details and bid on tasks. Bid count increases on action  
- 📱 **Responsive UI** – Fully optimized design for mobile, tablet, and desktop screens  
- 🌗 **Theme Toggle** – Includes dark/light mode switching for better user experience  
- 🎉 **Interactive UI Enhancements** – Implemented packages like react-awesome-reveal and animated loaders  

---

## 🧭 Routes Overview

| Route            | Access   | Description                               |
|------------------|----------|-------------------------------------------|
| `/`              | Public   | Home page with banner, featured & extra sections |
| `/login`         | Public   | User login page with Google support       |
| `/register`      | Public   | User registration page                    |
| `/add-task`      | Private  | Add a new freelance task                  |
| `/browse-tasks`  | Public   | View all available tasks                  |
| `/task/:id`      | Private  | Task details with bidding option          |
| `/my-tasks`      | Private  | View, update, or delete own tasks         |
| `/update-task/:id` | Private | Update a task using a form               |
| `*`              | Public   | 404 Not Found Page                        |

---

## 🔐 Environment Variables

### `.env (Client Side)`

```env
VITE_apiKey: "AIzaSyAvRfccrMcKboUc7GCvEZzyRPioMO4cJBg",
VITE_authDomain: "freelance-task-marketplace.firebaseapp.com",
VITE_projectId: "freelance-task-marketplace",
VITE_storageBucket: "freelance-task-marketplace.firebasestorage.app",
VITE_messagingSenderId: "569783921618",
VITE_appId: "1:569783921618:web:eb6a9ffd6d3366316f760b"

🛠️ Getting Started – How to Run This Project Locally
⚙️ Prerequisites
Install these first:

Node.js

MongoDB (local or Atlas)

Git (optional)


🚀 Clone the Project

git clone https://github.com/rifat-hasan121/Quick-Hunt-Client.git
git clone https://github.com/rifat-hasan121/Quick-Hunt-Server.git

cd Quick-Hunt-Client
npm install

🖥️ Server Setup
git clone https://github.com/rifat-hasan121/Quick-Hunt-Client.git
npm start


---


## 📞 Contact

- 📧 Email: your-rifathasannetrakona@gmail.com
- 🌐 LinkedIn: (https://www.linkedin.com/in/md-rifat-hasan-46256b325)
- 💼 Portfolio: (https://rifat-hasan.netlify.app/)

---

> 🔄 Last updated on: May 25, 2025




