import React ,{useState,useContext} from "react";
import axios from 'axios';
import { store } from "../App";
import {Redirect} from 'react';

const Login=()=>{
    const [token,setToken]=useContext(store)
    const [data,setData]=useState({
        email:'',
        password:''
    })

    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
   
    const submitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res=>setToken(res.data.token)
        )
    }

    if(token){
       return <Redirect to='dashboard'/>
    }

    return(
        <div>
 <center>
         <form onSubmit={submitHandler} autoComplete="off">
            <h3>Login</h3>
            <input type="email"  onChange={changeHandler} name="email" placeholder="Email"/><br/>
            <input type="password" onChange={changeHandler} name="password" placeholder="password"/><br/>
            <input type="submit" value="Login"/><br/>
        
         </form>
         </center>
        </div>
    )
}

export default Login; 