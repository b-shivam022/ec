import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail && password) {
      window.localStorage.setItem("Token", "asdfghjklqwertyuiop");
    }
  };

  const PostData = () => {

    setIsClicked(true);

    Axios.post("/login", {
      email: userEmail,
      password: password,
    }).then((response) => {
      console.log(response);
      
      if(response.data.message==="Sucessfully login!"){
        navigate('/');
      }
      else{
        setShowMessage(response.data.message);
      }
    });
  };

  return (
    <section>
      <div className="login_page">
        <div className="login_card">
          <p className="login_text">LOGIN</p>
          <p>Please enter your email and password!</p>
          <form method="POST" onSubmit={handleSubmit} className="login_form">
            <input
              className="login_user"
              type="email"
              placeholder="Enter your gmail"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              className="login_pass"
              type="password"
              placeholder="Enter your password"
              name="ps"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link>
              <p>Forgot password ?</p>
            </Link>
            {isClicked ? <p className="Smessage">{showMessage}</p> : ""}
            <button type="submit" className="loginBtn" onClick={PostData}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
