import React from "react"
import classes from "./index.module.css"
import "./index.module.css"
export default function Middle(props) {
    return (
        <div className={classes.container} style={{ width: props.width + "%" }}>

            {props.activecomponent === 'a' && <div className={classes.box}>123</div>}
            {props.activecomponent === 'b' && <div className={classes.box1}>123</div>}
            {props.activecomponent === 'c' && <div className={classes.box2}>123</div>}
            {props.activecomponent === 'd' && <div className={classes.box3}>123</div>}
        </div>
    )
}

