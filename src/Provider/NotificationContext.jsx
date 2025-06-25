// src/Provider/NotificationContext.jsx
import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  const incrementNotification = () => {
    setNotificationCount((prev) => prev + 1);
  };

  const resetNotification = () => {
    setNotificationCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ notificationCount, incrementNotification, resetNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
