import React from "react";
import "./Login.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-display">
        <div className="login-wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="login-input-box">
              <input type="text" placeholder="Username" required />
              <ion-icon name="person-outline" className="icon"></ion-icon>
            </div>
            <div className="login-input-box">
              <input type="password" placeholder="Password" required />
              <ion-icon name="lock-closed-outline" className="icon"></ion-icon>
            </div>
            <div className="remember-forgot">
              <label>
                {" "}
                <input type="checkbox" />
                Remember me
              </label>
              <button className="forgot-button">Forgot Password</button>
            </div>
            <Link to="/landing">
              <button className="login-button" type="submit">Login</button>
            </Link>
            <div className="register-container">
              <p>Don't have an account?</p>
              <Link to="/register">
                <p className="register-link">Register</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
