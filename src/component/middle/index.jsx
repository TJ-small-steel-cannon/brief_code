import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import View0 from "../../pages/view0";
import View1 from "../../pages/view1";
export default function Middle(props) {
  const [Views, setViews] = useState([<View0 />, <View1 />]);
  const [View, setView] = useState(null);
  useEffect(() => {
    if (props.data != null) {
      setView(Views[props.data]);
    }
  }, [props.data]);
  return (
    <div className={classes.container} style={{ width: props.width + "%" }}>
      <div className={classes.box}>
        {View !== null ? View : <h1 className={classes.msg}>请选择模板</h1>}
      </div>
    </div>
  );
}
