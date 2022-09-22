import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className="container">
        <h1>Sign Up</h1>
        {/* <form name="myForm" onSubmit={()=>{return validateForm()}} method="post"> */}
            <div className="section" id="name">
                <i className="fa fa-user"></i>
                <input type="text" name="fname" id="fname" placeholder="Enter your name"/> <b><span className="formerror"></span></b>
            </div>
            <div className="section" id="email">
                <i className="fa fa-envelope"></i>
                <input type="email" name="femail" id="email" placeholder="Enter your email"/> <b><span className="formerror"></span></b>
            </div>
            <div className="section" id="phone">
                <i className="fa fa-phone"></i>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone no."/> <b><span className="formerror"></span></b>
            </div>
            <div className="section" id="password">
                <i className="fa fa-key"></i>
                <input type="password" name="password" id="password" placeholder="Enter your password"/> <b><span className="formerror"></span></b>
            </div>
            <div className="section" id="cpassword">
                <i className="fa fa-unlock-alt"></i>
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password"/> <b><span className="formerror"></span></b>
            </div>
            <button className="btn">Sign up</button>
    </div>
    {/* </form> */}
    </div>
  )
}

export default Signup
