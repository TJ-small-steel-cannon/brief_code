import Middle from "./component/middle";
import Right from "./component/right";
import classes from "./App.module.css";
import { useState } from "react";
import Left from "./component/left";

function App() {
  // 是否按下
  const [isMouseDown, setIsMouseDown] = useState(false);
  // 规划最右侧属性块的宽度
  const [rightWidth, setRightWidth] = useState(15);
  // 规划左侧属性块的宽度
  const [leftWidth, setLeftWidth] = useState(15);
  // 最左侧缩略图块是否显示
  const [isShow, setIsShow] = useState(true);

  // 当鼠标移动触发的函数
  const handleMove = (e) => {
    // 当在线上按下的时候 才会 触发 获取鼠标位置
    if (isMouseDown) {
      // 把鼠标的位置除屏幕的大小 算出百分比
      const res = Math.round((e.clientX / window.innerWidth) * 100);
      // 定义 中间宽度
      // const middle = res-leftWidth;

      // 定义右侧宽度
      const right = 100 - res;

      // console.log(
      //   "left=10%" + "middle=" + middle + "%" + "right=" + right + "%"
      // );

      //  规定右侧宽度 在缩略图块显示的时候 宽度定死在15%~40%
      //  规定右侧宽度 在缩略图块不显示的时候 宽度定死在15%~60%
      if (right > 15 && right < 40 && isShow) {
        // 满足条件 才给右侧属性块设置宽度 否则 一直延续上一次的宽度
        setRightWidth(right);
      } else if (right > 15 && right < 60 && !isShow) {
        setRightWidth(right);
      }
    }
  };

  // 显示左侧 缩略图块
  const handleShowLeft = () => {
    // 设置 缩略图块状态为显示 判断的话也可以用!0为显示 ==0为隐藏 我懒得改了
    setIsShow(true);
    // 设置 缩略图块的宽度大小为15%
    setLeftWidth(15);
    // 这是为了 判断 当左侧 缩略图块显示的 时候 不能让右侧的属性块
    //  一直还保持最大宽度60% 当左侧缩略图块显示的时候
    // 右侧做大为40% 为什么不直接 设置 而是加if呢
    // 就是为了 判断 超过40%的时候 才让他归位
    if (rightWidth > 40) {
      setRightWidth(40);
    }
  };

  // 当左侧 缩略图块隐藏的时候 让显示状态为false 宽度为0
  const handleHideLeft = () => {
    setIsShow(false);
    setLeftWidth(0);
  };

  return (
    <div
      className={classes.app}
      onMouseMove={handleMove}
      onMouseUp={() => {
        setIsMouseDown(false);
      }}
    >
      {/* 左边显示缩略图的*/}
      <Left width={leftWidth} />
      {/* 左侧缩略按钮 */}
      {!isShow ? (
        <button
          style={{ left: "0px", top: "0px" }}
          className={classes.btn}
          onClick={handleShowLeft}
        >
          显示
        </button>
      ) : (
        <button
          style={{ left: "15%", top: "0px" }}
          className={classes.btn}
          onClick={handleHideLeft}
        >
          隐藏
        </button>
      )}
      {/* 中间显示网页的 */}
      <Middle width={100 - rightWidth - leftWidth} />
      {/* 中间的线 */}
      <div
        className={classes.line}
        onMouseUp={() => {
          setIsMouseDown(false);
        }}
        onMouseDown={() => {
          setIsMouseDown(true);
        }}
      ></div>
      {/* 右边显示详情信息的 */}
      <Right width={rightWidth} />
    </div>
  );
}

export default App;
