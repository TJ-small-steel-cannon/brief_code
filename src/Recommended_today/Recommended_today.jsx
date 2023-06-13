/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import img from './recommend1.png'
import './Recommended_today.css'

function Recommended() {
    const [recommend] = useState({
        recommend: [
            {
                "id": 1,
                "img": img
            },
            {
                "id": 2,
                "img": img
            },
            {
                "id": 3,
                "img": img
            },
            {
                "id": 4,
                "img": img
            },
        ]
    })

    return (
        <div className='recommend'>
            <ul className='recommend_ul'>
                <li className='recommend_ul_l1'>
                    <div className='recommend_ul_clock'>
                        <img src={require("./clock.png")} alt=""></img>
                        <p>今日推荐</p>
                    </div>
                </li>
                {recommend.recommend.map((rem) => (
                    <li key={rem.id}><img src={rem.img}></img></li>
                ))}
            </ul>
        </div>
    )
}

export default Recommended