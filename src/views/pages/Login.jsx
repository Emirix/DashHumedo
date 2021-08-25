import React from "react";

function Login() {
  return (
    <div className="center">
      <div className="login-con">
        <img src="svg/logo.svg" alt="" />
        <div className="humedo-title">Húmedo</div>
        <form action="">
            <div className="icon-input">
                <img src="svg/person.svg" alt="" />
                <input type="text" />
            </div>

            <div className="icon-input">
                <img src="svg/finger.svg" alt="" />
                <input type="text" />
            </div>

            <button className="btn">LOG</button>
            <div className="btn-text">Forgot password?</div>
            <div className="btn-text">Register for Húmedo</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
