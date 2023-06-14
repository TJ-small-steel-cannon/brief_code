import React from 'react'
import Classes from './forgetPwd.module.css'
import ForgetPwd from '../../component/ForgetPwd/ForgetPwd'
export default function ForgetPwdPage() {
  return (
    <div className={Classes.box}>
       <div className={Classes.head}>
            <div className={Classes.logo}>
                    <img src='/img/logo.png' alt='logo'/>
            </div>
            <p className={Classes.tittle}>Tome</p>
       </div>
       <div className={Classes.login}>
          <ForgetPwd/>
       </div>
       
    </div>
  )
}
