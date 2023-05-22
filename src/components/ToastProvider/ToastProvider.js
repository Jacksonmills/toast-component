import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (payload) => {
    const { message, variant } = payload;
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  useEscapeKey(removeAllToasts);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
