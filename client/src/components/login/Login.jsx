import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.email && userData.password) {
      window.localStorage.setItem("Token", "asdfghjklqwertyuiop");
      if (userData) {
        return <redirect to="/about" />;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setUserData(value);
  };

  return (
    <section>
      <div>
        <form
          method="POST"
          onSubmit={(e) => {
            handleSubmit();
          }}
        >
          <input
            type="email"
            placeholder="Enter your mail"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
