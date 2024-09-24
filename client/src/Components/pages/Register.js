// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const { username, password } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/register', formData);
//       alert(res.data.msg);
//     } catch (err) {
//       console.error(err.response.data);
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
import {useState} from 'react';
import axios from 'axios'


function Register(){
const [name,setName] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();

const handleSubmitt = (e) =>{
  e.preventDefault();
  axios.post('http://localhost:3001/register',{name,email,password})
  .then(result => console.log(result))
  .catch(err => console.log(err))
}

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmitt}>
        <strong>Name</strong>
        <input type="text" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
        <strong>email</strong>
        <input type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        <strong>Password</strong>
        <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register