import React, { useState } from "react";
import { axiosAuth } from '../auth/axiosAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({});
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = props => {
    axiosAuth().post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/');
    })
  }

  const handleChange = e => {
    setCredentials(e.target.value);
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          name="username"
          type="text"
          placeholder="Username" 
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password" 
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
