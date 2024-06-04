import React from "react";
import "./Signup.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="signup-display">
        <div className="signup-wrapper">
          <form action="">
            <h1>Sign Up</h1>
            <div className="signup-input-box">
              <input type="text" placeholder="Full Name" required />
              <ion-icon
                name="accessibility-outline"
                className="icon"
              ></ion-icon>
            </div>
            <div className="signup-input-box">
              <input type="text" placeholder="Username" required />
              <ion-icon name="person-outline" className="icon"></ion-icon>
            </div>
            <div className="signup-input-box">
              <input type="text" placeholder="Email" required />
              <ion-icon name="mail-outline" className="icon"></ion-icon>
            </div>
            <div className="signup-input-box">
              <input type="password" placeholder="Password" required />
              <ion-icon name="lock-closed-outline" className="icon"></ion-icon>
            </div>
            <Link to="/login">
              <button className="signup-button" type="submit">Sign Up</button>
            </Link>
            <div className="login-container">
              <p>Already have an account?</p>
              <Link to="/login">
                <p className="login-link">Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
