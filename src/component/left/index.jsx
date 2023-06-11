import React from "react";
import classes from "./index.module.css";
export default function Left(props) {
  return (
    <div className={classes.container} style={{ width: props.width + "%" }}>
      缩略图
    </div>
  );
}
