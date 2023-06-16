import React from "react"
import classes from "./index.module.css"
export default function Right(props) {
    // console.log(props.width + "%");
    return (
        <div className={classes.container} style={{ width: props.width + "%" }}>
            <span>我是right</span>
            {props.showinput === 0 && <div><input type="text" placeholder="我是输入框0" onChange={props.handleinputChange}></input>
                <button>我是输入框0的按钮</button>
            </div>}
            {props.showinput === 1 && <div><input type="text" placeholder="我是输入框1" onChange={props.handleinputChange}></input>
                <button>我是输入框1的按钮</button>
            </div>}
            {props.showinput === 2 && <div><input type="text" placeholder="请输入div的宽" onChange={props.handleinputChange}></input>
                <button onClick={props.tiJiao}>我是输入框2的按钮</button>
            </div>}
        </div>
    )
}