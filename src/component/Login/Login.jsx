/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Classes from './login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
  // 密码显示隐藏
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
  return (
   <div className={Classes.box}>
      <input placeholder='用户名' type="text" value={username} onChange={handleUsernameChange} />
      {isValid ? (
        <p>用户名有效</p>
      ) : (
        <p>用户名无效，用户名必须由4至16个字符的字母、数字或下划线组成</p>
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
      <br/>
      <Link  to="/ForgetPwd" className={Classes.forget}>忘记密码？</Link>
      <button className={Classes.lo}>登录</button><br/>
      <Link to='/Register'>没有账号,立即注册</Link>
   </div>
  )
}
