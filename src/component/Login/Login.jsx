/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Classes from './login.module.css';
import Page from '../../pages/Page/Page';

export default function Login() {
  return (
  
   <div className={Classes.box}>
    
      <input placeholder='用户名' /><br/>
      <input placeholder='密码'/><br/>
      <a className={Classes.forget}>忘记密码？</a>
      <button className={Classes.lo}>登录</button><br/>
      <a>没有账号,立即注册</a>
   </div>
  )
}
