import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toastify({ show }) {
  useEffect(() => {
    if (show) {
      notify();
    }
  }, [show]);

  const notify = () => toast.success("Login Successful");

  return (
    <div className='toas'>
      <ToastContainer />
    </div>
  );
}
