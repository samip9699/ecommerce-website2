import React, {useState} from "react";
import { useNavigate , Link} from "react-router-dom";
import "./signin.css";

const SignIn = () => {
    const navigate = useNavigate ();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelSubmit = (e) => {
  e.preventDefault();

        const savedemail = localStorage.getItem("email");
        const savedpassword = localStorage.getItem ("password");

        if (email === "") {
            alert ("please enter your email");
            return;
        }
        if (password === ""){
            alert ("please enter your password");
            return;

        }
        if(email === savedemail && password === savedpassword) {
            localStorage.setItem("isloggedIn","true");

            alert("sign In successfully!");
            navigate("/");
        }else{
            alert("invalid email or password");
        }
    };
    return(
        <div className="signin-page">
      <div className="signin-box">
        <h1>Welcome Back</h1>
        <p>Sign in to continue shopping</p>

        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
    );
};


export default SignIn;