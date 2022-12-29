import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    setIsClicked(true);

    const { fullName, email, password, cpassword } = userData;

    const response = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        cpassword,
      }),
    });

    const data = await response.json();

    if (data.status === 401 || !data) {
      console.log("Invalid Registration");
    } else {
      console.log("Registration Sucessfull");
      console.log(data);
      if (data.message === "Sucessfully Registered!") {
        navigate("/login");
      } else {
        setShowMessage(data.message);
      }
    }
  };

  return (
    <>
      <div className="register_page">
        <div className="register_card">
          <p className="register_text">SignUp</p>
          <form className="register_form" method="POST">
            <input
              className="register_user"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
            />
            <input
              className="register_user"
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              className="register_pass"
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              className="register_pass"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              value={userData.cpassword}
              onChange={handleChange}
            />
            {isClicked ? <p className="Smessage">{showMessage}</p> : ""}
            <button type="submit" className="registerBtn" onClick={PostData}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
