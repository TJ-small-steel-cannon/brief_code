import React from "react";
import classes from "./index.module.css";
export default function Left(props) {
    return (
        // <div className={`${classes.container} ${!props.isVisible ? classes.slideOutLeft : ''}`} style={{ width: props.width + "%" }}>
        <div className={classes.container} style={{ width: props.width + "%" }}>
            <span className={classes.text}>缩略图</span>
            <div className={classes.bigbox}>
                <div className={classes.box} onClick={() => props.handleonclick("a")}></div>
                <div className={classes.box} onClick={() => props.handleonclick("b")}></div>
                <div className={classes.box} onClick={() => props.handleonclick("c")}></div>
                <div className={classes.box} onClick={() => props.handleonclick("d")}></div>
            </div>
        </div>
    );
}