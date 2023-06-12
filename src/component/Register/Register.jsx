/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Classes from './register.module.css'
export default function Register() {
  return (
    <div className={Classes.box}>
    <p className={Classes.crt}>Create Your Tome Account</p>
      <input placeholder='用户名' /><br/>
      <input placeholder='密码'/><br/>
      <input placeholder='确认密码'/><br/>
      <input placeholder='手机号'/><br/>
      <button className={Classes.lo}>注册</button><br/>
      <a>已有账号，去登录</a>
   </div>
  )
}
