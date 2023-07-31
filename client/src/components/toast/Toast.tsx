import React, { useState, useEffect, ReactNode } from 'react';

interface ToastProps {
  message: string;
  children: ReactNode;
}

const Toast: React.FC<ToastProps> = ({ message, children }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className="fixed bottom-5 right-5">
          <div className="bg-white shadow-md rounded-md flex items-center px-4 py-2 max-w-md border-2 border-transparent transition-all duration-500 hover:border-green-500 animate-fade-in">
            <div className="flex-grow pr-4">
              {children}
              {message}
            </div>
            <button className="text-gray-500 ml-4" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;