import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
  const [nick, setNick] = useState("demo");
  const [pass, setPass] = useState("demo");

  function login(e) {
    e.preventDefault();

    /* axios.post("http://116.203.43.100/login",{
      username:"demo",
      password:"demo"
    },{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>{
      console.log(res)
    })

*/

    axios
      .post("http://116.203.43.100/login", {
        username: nick,
        password: pass,
      }
      )
      .then((res) => {
        if("success" in res.data){
          if(!res.data.success){
            alert(res.data.reason);

          }
        }
        if("access_token" in res.data){
          localStorage.setItem("humedo_access",res.data.access_token);
          localStorage.setItem("humedo_refresh",res.data.refresh_token);
          window.location = "/overview"
        }
      })
  }

  if(localStorage.getItem("humedo_access") != null){
    window.location = "/overview"

  }else{
  return (
    <div className="center">
      <div className="login-con">
        <img src="svg/logo.svg" alt="" />
        <div className="humedo-title">Húmedo</div>
        <form onSubmit={(e) => login(e)}>
          <div className="icon-input">
            <img src="svg/person.svg" alt="" />
            <input type="text" value={nick} onChange={e=>setNick(e.target.value)} />
          </div>

          <div className="icon-input">
            <img src="svg/finger.svg" alt="" />
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          </div>

          <button className="btn">LOG</button>
          <div className="btn-text">Forgot password?</div>
          <Link to="/register" className="btn-text">
            Register for Húmedo
          </Link>
        </form>
      </div>
    </div>
  );
  }
}

export default Login;
