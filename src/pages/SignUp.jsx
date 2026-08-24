
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";


const  SignUp = () => {
  
    const navigate = useNavigate();

    const [fullName,setFullName]= useState("");
    const [email,setEmail] = useState("");
    const [phonenumber,setPhoneNumber]= useState("");
    const [password,setPassword]= useState("");
    const [confirmpassword,setConfirmPassword]= useState("");

    const handelSubmit = (e) =>{
        if(fullName === ""){
            alert("please enter your full name");
            return;
        }
        if (email === ""){
            alert("please enter your email");
            return;
        }
        if (phonenumber ===""){
            alert("please enter your phonenumber");
            return;
        }
        if(password ===""){
            alert ("please enter your password");
            return;
        }
        if(confirmpassword === "" ) {
            alert ("please confirm password ");
            return;
        }
        if (password !== confirmpassword) {
            alert ("password and confirmpassword do not match");
            return;
        }
           localStorage.setItem("fullname", fullName);
           localStorage.setItem ("email", email);
           localStorage.setItem ("phonenumber",phonenumber);
           localStorage.setItem ("password",password);
           localStorage.setItem ("confirmpassword", confirmpassword);

           alert("sign Up successfully")

           navigate("/signin")

    };
       return (
        
      <div className="signup-page">
        <div className="signup-box">
            <h1> create account </h1>
            <p>sign up to continue account  </p>

           <from onsubmit={handelSubmit} >
            <div className="input-group">
                <lable> full name </lable>
               <input type="text" placeholder="enter your full name " value={fullName} onChange={(e)=>setFullName(e.target.value) }/>
            </div>
            <div className="input-group">
                <lable>email</lable>
            <input type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value) } />
            </div>
              <div className="input-group">
                <lable>phonenumber</lable>
            <input type="number" placeholder="enter your phonenumber" value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value) } />
            </div>
              <div className="input-group">
                <lable>password</lable>
            <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value) } />
            </div>
              <div className="input-group">
                <lable>confirmpassword</lable>
            <input type="password" placeholder="confirm your password  " value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value) } />
            </div>
            <button type="submit" className="signup-btn">
            Sign Up
          </button>
           </from>
             <p className="signin-text">
          Already have an account?{" "}
          <Link to="/signin">Sign In</Link>
        </p>
        </div>

      </div>
      
    );


};


export default SignUp;