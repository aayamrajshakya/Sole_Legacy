// https://www.w3schools.com/react/react_forms.asp

import React from 'react'
import "./Login.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="page_header">
      <div className="login_box">
        <div className="storeLogo">
          <h2>Login</h2>
        </div>
      {/* Kevin, your login form goes here      */}
      <input className="text_box" placeholder="E-mail address" id="email" value="" />
      <input className="text_box" placeholder="Password" id="password" value="" />
      <div className="bottom_text">
      <Link to ="/register">Create an account</Link>
      </div>
      
      </div>
      
    </div>
  )
}

