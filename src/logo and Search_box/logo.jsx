import { useState } from "react";
import logoImg from './logo.png';
import './logo.css'

/* eslint-disable jsx-a11y/alt-text */
function Logo() {
    const [logodata] = useState({
        logo:[
            {
                "id":1,
                "img":logoImg,
                "text":"搜索"
            }
        ]
    })
    return (
        <div className='header'>
            <div className='herder_logo'>
                {logodata.logo.map((logo) => (
                    <img src={logo.img} className="header_img" key={logo.id} />
                ))}
            </div>
            <div className='header_search'>
                <form method='get' action='#' className='header_form'>
                    <input type='text' className='header_text'></input>
                    {logodata.logo.map((logo) => (
                        <button className='header_button'>{logo.text}</button>
                    ))}
                </form>
            </div>
        </div>
    )
}
export default Logo;