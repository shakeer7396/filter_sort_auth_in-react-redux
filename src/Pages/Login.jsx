import React from "react";
import {useState} from "react"
import { useDispatch } from "react-redux";
import { logindata } from "../Redux/AuthReducer/action";
import {useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom"

const Login = () => {
  const [Email,Setemail]=useState("");
  const [Password,SetPassword]=useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const location=useLocation();

const  path=location.state?.from?.pathname||"/"

  const handleSubmit=(e)=>{
   e.preventDefault();
    if(Email&&Password){
      dispatch(logindata({Email,Password})).then((r)=>{
           navigate(path,{replace:true})
      })
    }
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" value={Email} onChange={(e)=>Setemail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" value={Password} onChange={(e)=>SetPassword(e.target.value)}/>
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
