import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login =()=>{
const navigate= useNavigate();
const [name,setName]=useState("");
const [password,setPassword]=useState("");
const handleLogin= async () => {
    try{
        const response=  await axios.get("http://localhost:4000/users");


     if(response.status===200 && response.data[0].name===name && response.data[0].password===password){
        navigate("/home")
        console.log("login Successfully");

     }
     else{
        console.error("Login failed");
     }

    }catch(error){
        console.error("Error in Login:",error);
    }

};

const handleSignUp =()=>{
navigate("/signup");

}



return( 
<div id="loginCard" className="loginCard">
    <h1 align="center ">Login</h1>
    <div id="inputs" className="inputs">
       <input placeholder="Enter Your Name" className="nameInput" type="text" onChange={(e)=>setName(e.target.value)}/>
       <input placeholder="Enter Your Password" className="passwordInput" type="password" onChange={(e)=>setPassword(e.target.value)} />

    </div>
 <div className="buttons">
     <button className="login" onClick={handleLogin}>Login</button>
     <button className="signup" onClick={handleSignUp}>Sign Up</button>
 </div>


    </div>
    )
  

}
export default Login;
