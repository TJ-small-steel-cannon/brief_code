import React, { useState } from "react";
import classes from "./index.module.css";
export default function View1() {
  const [domState, setDomState] = useState({
    list: {
      isClick: false,
    },
    lunbo: {
      isClick: false,
    },
  });

  const handleState = (key,e) => {
    e.stopPropagation()
    console.log(key);
    const newState = { ...domState };
    newState[key].isClick = !domState[key].isClick;
    console.log(newState[key].isClick);

    for (var item in newState) {
      if (item !== key) {
        newState[item].isClick = false;
      }
    }
    setDomState(newState);
  };

  const initState=()=>{
    const newState = { ...domState };
    for (var item in newState) {
        newState[item].isClick = false;
    }
    setDomState(newState);
  }

  return (
    <div className={classes.container} onClick={initState}>
      <div
        className={classes.list}
        onClick={(e) => {
          handleState("list",e);
        }}
      >
        <ul style={{ border: domState.list.isClick && "1px solid red" }}>
          <li>服装城</li>
          <li>美妆馆</li>
          <li>传智超市</li>
          <li>全球购</li>
          <li>闪购</li>
          <li>团购</li>
          <li>拍卖</li>
          <li>有趣</li>
        </ul>
      </div>

      <div
        className={classes.lunbo}
        style={{ border: domState.lunbo.isClick && "1px solid red" }}
        onClick={(e) => {
          handleState("lunbo",e);
        }}
      >
        <img src="/img/bg.jpg" alt="这是轮播图"/>
      </div>
    </div>
  );
}
