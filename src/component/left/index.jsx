import React from "react";
import classes from "./index.module.css";
export default function Left(props) {
  
  return (
    <div className={classes.container} style={{ width: props.width + "%" }}>
      <div className={classes.title}>代码模板</div>
      <div className={classes.main}>
        <div className={classes.item} onClick={()=>{props.onxx(0)}}>
          <img src="/img/bg.jpg" alt="" />
        </div>
        <div className={classes.item} onClick={()=>{props.onxx(1)}}>
          <img src="/img/bg.jpg" alt="" />
        </div>
        <div className={classes.item} onClick={()=>{props.onxx(2)}}>
          <img src="/img/bg.jpg" alt="" />
        </div>
        <div className={classes.item} onClick={()=>{props.onxx(3)}}>
          <img src="/img/bg.jpg" alt="" />
        </div>
        <div className={classes.item} onClick={()=>{props.onxx(4)}}>
          <img src="/img/bg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
