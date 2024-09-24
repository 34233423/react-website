import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css'; 
import Nav from '../Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const notify = () => {
    toast.success('Login Successful');
    setTimeout(() => {
      navigate('/shop');
    }, 5000);
  };

  const onSubmit = (data) => {
    notify();
    console.log(data);

    axios.post('http://localhost:3001/register', { name: data.username, password: data.password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className="login-container">
        <div className="aurora-background"></div>
        <div className="login-form">
          <ToastContainer />
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: { value: 3, message: "Username must be at least 3 characters long" }
                })}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.username && <span className="error">{errors.username.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" }
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>
            <button type="submit" className='btnlog'><strong><b>Get In</b></strong></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
