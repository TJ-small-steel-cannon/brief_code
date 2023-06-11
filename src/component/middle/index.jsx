import React from "react"
import classes from "./index.module.css"
export default function Middle (props){
    return(
        <div className={classes.container} style={{width:props.width+"%"}}>
             <div className={classes.box}>123</div>
        </div>
    )
}