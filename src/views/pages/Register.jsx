import React from "react";
import Header from "../component/Header";

function Register() {
  return (
    <div className="center ">
      <div className="register">
        <Header title="Register Settings" />
        <img src="svg/logo.svg" alt="" />

        <div className="register-form">
            <form>
                <div className="form-group">
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="" />
                </div>   

                <div className="form-group">
                    <label htmlFor="">E-Mail</label>
                    <input type="mail" placeholder="" />
                </div>   


                <div className="form-group">
                    <label htmlFor="">new Password</label>
                    <input type="password" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">confirm Password</label>
                    <input type="password" placeholder="" />
                </div>    
            </form>
            <div className="sag text-center">
                <div className="rt">Router</div>
                <div className="badge badge-sari">not connected</div>
            </div>
        </div>

        <button className="btn mt-5">Register</button>

        <div className="btn-text">Already have an account? <span className="mavi">Log in</span></div>
        <div className="btn-text">Exit</div>
      </div>
    </div>
  );
}

export default Register;
