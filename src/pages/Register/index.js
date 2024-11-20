import React from 'react'
import "./register.css"
import { useState } from 'react';



 const Register = () => {

  const[name , setName] =useState("");
  const[email , setsEmail] =useState("");
  const[password , setPassword] =useState("");
  const[address , setAddress] =useState("");

    const ResgisterUser = async(e)=>{
      e.preventDefault()

       let result = await fetch("http://localhost:7000/api/auth/signup  ",{
        method:'post',
        body: JSON.stringify({name,email,password,address}),
        headers:{
          "content-Type":"Application/json"
        }
       })
          result= await result.json()
          console.log(result)
    }

    

  return (
	<>
<div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" name='name' onChange={(e)=>setName(e.target.value)} type="text" className="input" />
        </div>
        <div className="group">
          <label htmlFor="email" className="label">Email</label>
          <input id="email" email='email' onChange={(e)=>setsEmail(e.target.value)} type="email" className="input" data-type="email" />
        </div>
		<div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" password='password' onChange={(e)=>setPassword(e.target.value)} type="password" className="input" data-type="password" />
        </div>
		<div className="group">
          <label htmlFor="address" className="label">Address</label>
          <input id="address" address='address' onChange={(e)=>setAddress(e.target.value)} type="text" className="input" data-type="address" />
        </div>

        <div className="group">
          <input id="check" type="checkbox" className="check" defaultChecked />
          <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
        </div>
        <div className="group">
          <button onClick={ResgisterUser} type="submit" className="button" defaultValue="Sign up" >Register</button> 
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </div>
      <div className="sign-up-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" type="text" className="input" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Repeat Password</label>
          <input id="pass" type="password" className="input" data-type="password" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input" />
        </div>
        <div className="group">
          <input type="submit" className="button" defaultValue="Sign Up" />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <label htmlFor="tab-1">Already Member?
          </label></div>
      </div>
    </div>
  </div>
</div>

	</>
  )
}

export default Register