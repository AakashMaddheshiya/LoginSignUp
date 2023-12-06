import React, { useState } from "react";
import "./LoginSignUp.css";
import user_icon from "./Assets/user.png";
import gmail_icon from "./Assets/gmail.png";
import password_icon from "./Assets/password.png";

const LoginSignUp = () => {
    const [change ,setChange]=useState("Login")
  return (
    <div className="container">
      <div className="header">
        <h1>{change}</h1>
        <div className="login-Sign-Up"> 
        {change=="Login"? <div></div>:<div className="inputs box">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>       }  
        
          
          <div className="inputs box">
            <img src={gmail_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputs box">
            <img src={password_icon} alt="" />
            <input type="text"  placeholder="Password"/>
          </div>
        </div>
        <div className="password-setting">
            {change==="Sign Up"? <div></div>:<div className="password-forgot">
                Forgot password ? <span> Click Here</span>
            </div> }
            
            <div className="Submit-button">
                <div className={change==="Login"?"Submit gray":"Submit" } onClick={()=>setChange("Sign Up")}>Sign Up</div>
                <div className={change==="Sign Up"?"Submit gray":"Submit"} onClick={()=>setChange("Login")}>Login</div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
