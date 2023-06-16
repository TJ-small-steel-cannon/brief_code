import React from "react"
import classes from "./index.module.css"
import "./index.module.css"
export default function Middle(props) {
    return (
        <div className={classes.container} style={{ width: props.width + "%" }}>

            {props.activecomponent === 'a' && <div className={classes.box}>
                <span>123</span>
                <button onClick={() => props.handlehtmlClick(0)} className={classes.button}>我是按钮0</button >
                <button onClick={() => props.handlehtmlClick(1)} className={classes.button}>我是按钮1</button >
            </div>}
            {props.activecomponent === 'b' && <div className={classes.box1}>
                <span>123</span>
                <div onClick={() => props.handlehtmlClick(2)} className={classes.mydiv} style={{ width: props.thevalue.theWidth + '%' }}>我是div1</div>
            </div>}
            {props.activecomponent === 'c' && <div className={classes.box2}>123</div>}
            {props.activecomponent === 'd' && <div className={classes.box3}>123</div>}
        </div >
    )
}

