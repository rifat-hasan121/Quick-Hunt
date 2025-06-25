import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routers/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './Contaxt/ThemeContext.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import NotificationProvider from './Provider/NotificationContext.jsx';



AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </NotificationProvider>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);
