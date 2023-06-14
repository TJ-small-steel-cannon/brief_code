import React from 'react'
import Classes from './page.module.css'
import Login from '../../component/Login/Login'
export default function LoginPage() {
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
       </div>
       
    </div>
  )
}
