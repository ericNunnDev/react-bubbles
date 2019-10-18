import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setInput(e.target.value);
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <h1>Login</h1>
        <input
          name="username"
          type="text"
          placeholder="Username" 
          value={input.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password" 
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
