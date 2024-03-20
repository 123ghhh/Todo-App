import React, { useRef } from 'react';
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp =()=>{
    
    const nameRef= useRef(null);
const passwordRef =useRef(null);
    const navigate= useNavigate();
const handleSignUp= async()=>{
 const username=nameRef.current.value;
 const password=passwordRef.current.value;

 try{
    const response =await axios.post("http://localhost:4000/register",{name:username,password});
   console.log("user login Succesfully");
}
catch(error){
console.error('Error in user side:',error);

}

}



const handleLogin =() => {
    navigate("/");
};


return( 
<div id="loginCard" className="loginCard">
    <h1 align="center ">Sign Up</h1>
    <div id="inputs" className="inputs">
       <input placeholder="Enter Your Name" className="nameInput" type="text" ref={nameRef}
       />
       <input placeholder="Enter Your Password" className="passwordInput" type="password" ref={passwordRef}/>

    </div>
 <div className="buttons">
     <button className="login" onClick={handleLogin}>Login</button>
     <button className="signup" onClick={handleSignUp} >Sign Up</button>
 </div>


    </div>
    )
  

}
export {SignUp};
