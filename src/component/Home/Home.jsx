import React from 'react'
import Classes from '../Home/home.module.css';
import { useNavigate } from "react-router-dom"; 

export default function Home() {

  const navigate=useNavigate();
  const IsToken=()=>{
  const myData=localStorage.getItem('token');
    if(myData){
      navigate("/ForgetPwd");
    }else{
      navigate("/login")
    }
  }
  return (
    <>
   <div className={Classes.box}>
        <div className={Classes.border}>
          <p className={Classes.tittle}>The new era<br/>of storytelling.</p>
          <p className={Classes.smtit}>Tome is the Al-powered format for your work & ideas.</p>
        </div>
   </div>
   <div className={Classes.end}>
     <button onClick={IsToken}>进入</button>
   </div>
   </>
  )
}
