import React,{useState,useContext,useEffect} from 'react';
import { store } from "../App";
import {Redirect} from 'react';
import axios from 'axios';

const Dashboard=()=>{
    const [token,setToken]=useContext(store);
    const [data,setData]=useState(null);
    
   useEffect(()=>{
    axios.get("http://localhost:5000/dashboard",{
        headers:{
            'x-token':token
        }
    }).then(res=>setData(res.data)).catch((err)=>console.log(err))
   },[])

    if(!token){
        return <Redirect to='/login'/>
    }
    return (
        <div>
            data &&
            <center>
                Welcome user:{data.username}<br/>
                <button onClick={()=>setToken(null)}>Logout</button>
            </center>
        </div>
    )
}

export default Dashboard;