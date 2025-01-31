import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitPass, setSubmitPass] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setSubmitPass(true);
      setSubmitFail(false);
    } else {
      setSubmitFail(true);
      setSubmitPass(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {submitFail && <p>Invalid username or password</p>}

      {submitPass ? (
        <p>Welcome, user</p>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
