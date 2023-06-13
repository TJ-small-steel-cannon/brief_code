import { useState } from "react";
import './navbar.css'

/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
    const [navbar_left] = useState({
        navbar: [
            {
                "id": 1,
                "name": "天津 尚品汇欢迎您！",
                "hyperlinks": "#"
            },
            {
                "id": 2,
                "name": "登录",
                "hyperlinks": "#"
            },
            {
                "id": 3,
                "name": "注册",
                "hyperlinks": "#"
            }
        ]
    })

    const [navbar_right] = useState({
        navbar: [
            {
                "id": 1,
                "name": "我的订单",
                "hyperlinks": "#"
              },
              {
                "id": 2,
                "name": "我的购物车",
                "hyperlinks": "#"
              },
              {
                "id": 3,
                "name": "我的尚品汇",
                "hyperlinks": "#"
              },
              {
                "id": 4,
                "name": "尚品汇会员",
                "hyperlinks": "#"
              },
              {
                "id": 5,
                "name": "企业采购",
                "hyperlinks": "#"
              },
              {
                "id": 6,
                "name": "关注尚品汇",
                "hyperlinks": "#"
              },
              {
                "id": 7,
                "name": "合作招商",
                "hyperlinks": "#"
              },
              {
                "id": 8,
                "name": "商家后台",
                "hyperlinks": "#"
              }            
        ]
    })
    return (
        <div className="navbar">
            <div className="navbar__middle">
                {navbar_left.navbar.map((nav) => (
                    <span className="navbar__item" key={nav.id}><a href={nav.name}>{nav.name}</a></span>
                ))}
                <i className="navbar__item iconfont icon-email"></i>
                <i className="navbar__item iconfont icon-phone"></i>
                <i className="navbar__item iconfont icon-speaker"></i>
                <i className="navbar__item iconfont icon-user"></i>
            </div>
            <div className="navbar__right">
                {navbar_right.navbar.map((nav) =>(
                    <span className="navbar__item" key={nav.id}><a href={nav.name}>{nav.name}</a></span>
                ))}
            </div>
        </div>
    )
}

export default Navbar;