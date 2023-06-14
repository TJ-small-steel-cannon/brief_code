import React from 'react'
import Classes from './RejisterPage.module.css'
import Register from '../../component/Register/Register'
export default function RegisterPage() {
  return (
    <div className={Classes.box}>
       <div className={Classes.head}>
            <div className={Classes.logo}>
                    <img src='/img/logo.png' alt='logo'/>
            </div>
            <p className={Classes.tittle}>Tome</p>
       </div>
       <div className={Classes.login}>
          <Register/>
       </div>
    </div>
  )
}
