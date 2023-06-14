/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Classes from './register.module.css'
import { Link } from 'react-router-dom';
export default function Register() {
  // 设置密码显示隐藏
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 再次设置密码显示隐藏

  const [rePassword,reSetPassword]=useState('');
  const[reShowPassword,reSetShowPassword]=useState(false);

  const rehandlePasswordChange=(revent)=>{
      reSetPassword(revent.target.value);
  }
  const retogglePasswordVisibility=()=>{
    reSetShowPassword(!reShowPassword);
  }

// 用户名正则
const [username, setUsername] = useState('');
    const [isValid, setIsValid] = useState(false);

  const handleUsernameChange = (userEvent) => {
    const { value } = userEvent.target;
    setUsername(value);
    setIsValid(validateUsername(value));
  };

  const validateUsername = (username) => {
    // 定义用户名的正则表达式规则
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
    return usernameRegex.test(username);
  };
// 手机号正则
const [phone, setPhone] = useState('');
const [isPhoneValid, setPhoneIsValid] = useState(false);

const validatePhone = (phone) => {
  const regex = /^1[0-9]{10}$/;
  return regex.test(phone);
};

const handlePhoneChange = (event) => {
  const newPhone = event.target.value;
  setPhone(newPhone);
  setIsValid(validatePhone(newPhone));
};
  return (
    <div className={Classes.box}>
    <p className={Classes.crt}>Create Your Tome Account</p>
    <input placeholder='用户名' type="text" value={username} onChange={handleUsernameChange} />
      {isValid ? (
        <p className={Classes.p}>用户名有效</p>
      ) : (
        <p className={Classes.p}>用户名无效，用户名必须由4至16个字符的字母、数字或下划线组成</p>
      )}
      <div className={Classes.pwd}>
      <input placeholder='密码'
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
      />
      <img 
        src={showPassword ? '/img/open.png' : '/img/close.png'}
        alt={showPassword ? 'Hide password' : 'Show password'}
        onClick={togglePasswordVisibility}
      />
      </div>

      {/* ------------------------- */}
     <div className={Classes.rePwd}>
     <input placeholder='确认密码'
        type={reShowPassword ? 'text' : 'password'}
        value={rePassword}
        onChange={rehandlePasswordChange}
      />
      <img
        src={reShowPassword ? '/img/open.png' : '/img/close.png'}
        alt={reShowPassword ? 'Hide password' : 'Show password'}
        onClick={retogglePasswordVisibility}
      />

     </div>
      
     <input type="text" value={phone} onChange={handlePhoneChange} />
    {isValid ? <p className={Classes.p}>Phone number is valid</p> : <p className={Classes.p}>Phone number is invalid</p>}
      <Link to='/Login' >已有账号，去登录</Link>
      <button>注册</button><br/>
     
   </div>
  )
}
