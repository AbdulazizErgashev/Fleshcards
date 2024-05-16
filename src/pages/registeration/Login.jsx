import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="box">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me!
            </label>
            <NavLink to="/SignUp">Forgot password</NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
