import React from "react";
import { ErrorMessage } from "../ErrorMessage";
import "./LoginForm.css";

const LoginForm = ({ formData, onInputChange, onSubmit, isDataValid }) => {
  return (
    <div className="login-container">
      <form>
        <div className="login-form">
          <div className="form-control-login">
            <label>Username</label>
            <input
              name="userName"
              value={formData.userName}
              onChange={onInputChange}
              style={
                isDataValid || formData.userName
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.userName}
              message="Username is required"
            />
          </div>
          <div className="form-control-login">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={onInputChange}
              style={
                isDataValid || formData.password
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.password}
              message="Password is required"
            />
          </div>
          <button className="login-button" onClick={onSubmit}>
            Login
          </button>
          <div className="additional-links">
            <p>
              <span>Forgot your password?</span>
            </p>
            <p>
              <span>Click here</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
