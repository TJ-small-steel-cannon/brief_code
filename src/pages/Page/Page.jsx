import React from 'react'
import Classes from './page.module.css'
import { useRoutes } from "react-router-dom";
import Login from '../../component/Login/Login'
import Register from '../../component/Register/Register'
import ForgetPwd from '../../component/ForgetPwd/ForgetPwd'
export default function Page() {
  return (
    <div className={Classes.box}>
       <div className={Classes.head}>
            <div className={Classes.logo}>
                    <img src='/img/logo.png' alt='logo'/>
            </div>
            <p className={Classes.tittle}>Tome</p>
       </div>
       <div className={Classes.login}>
          <Login/>
          {/* <Register/> */}
          {/* <ForgetPwd/> */}

       </div>
       
    </div>
  )
}
