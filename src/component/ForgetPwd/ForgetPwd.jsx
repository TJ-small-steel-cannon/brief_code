/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Classes from './forget.module.css'
export default function ForgetPwd() {
  return (
    /*  <p className='p'>忘记密码？</p>
            <p className='p'>输入您的电子邮件或手机号<p/>
            <p>我们将向您发送密码重置说明</p></p> */
    <div>
 <div className={Classes.box}>
      <p>忘记密码?</p>
      <p>输入您的电子邮件,手机号</p>
      <p>我们将向您发送密码重置说明</p>
      <input placeholder='账号' /><br/>
      <input placeholder='手机号'/><br/>
      <button className={Classes.lo}>继续</button><br/>
      <a>返回到上一级</a>
   </div>
    </div>
  )
}
