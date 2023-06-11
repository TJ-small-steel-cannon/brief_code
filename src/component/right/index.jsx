import React from "react"
import classes from "./index.module.css"
export default function Right (props){
    console.log(props.width+"%");
    return(
        <div className={classes.container} style={{width:props.width+"%"}}>
              我是right
        </div>
    )
}