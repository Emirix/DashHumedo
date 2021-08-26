import React from "react";
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className="center">
      <div className="login-con">
        <img src="svg/logo.svg" alt="" />
        <div className="humedo-title">Húmedo</div>
        <form action="">
            <div className="icon-input">
                <img src="svg/person.svg" alt="" />
                <input type="text"  autocomplete="off"/>
            </div>

            <div className="icon-input">
                <img src="svg/finger.svg" alt="" />
                <input type="password" autocomplete="off" />
            </div>

            <button className="btn">LOG</button>
            <div className="btn-text">Forgot password?</div>
            <Link to="/register" className="btn-text">Register for Húmedo</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
