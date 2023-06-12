import React from 'react'
import Classes from "./index.module.css"
import Home from '../../component/Home/Home'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div className={Classes.body}>
        <div className={Classes.head}>
          <div className={Classes.logo}>
            <img  src='/img/logo.png' alt='logo'/>
          </div>
          <div className={Classes.center}>
            <ul>
              <li>首页</li>
              <li>关于我们</li>
              <li>使用文档</li>
            </ul>
          </div>
          <div className={Classes.right}>
            <Link to="/login"><button>登录</button></Link>
            <Link to="/register"><button>注册</button></Link>
          </div>
        </div>
        <div >
          <Home/>
        </div>
    </div>
  )
}
