import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div className="container">
        <h1>Login</h1>
        <div className="section">
            <i className="fa fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Enter your email"/> 
        </div>
        <div className="section">
            <i className="fa fa-key"></i>
            <input type="password" name="password" id="password" placeholder="Enter your password"/>
        </div>
        <a href="signup.html"> <button className="btn"> Don't have an account yet? Signup here </button> </a>
    </div>
    </div>
  )
}

export default Login
