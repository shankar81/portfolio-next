import classnames from "classnames";
import React, { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../contexts/ThemeProvider";
import classes from "./Switch.module.css";

const Switch: React.FC = () => {
  const thumbRef = useRef<HTMLDivElement>();
  // const mouseDown = useRef<number | null>(null);

  // useEffect(() => {
  //   thumbRef.current.addEventListener("mousedown", handleMouseDown);
  //   thumbRef.current.addEventListener("mouseup", handleMouseUp);
  //   thumbRef.current.addEventListener("mousemove", handleMouseMove);
  //   thumbRef.current.addEventListener("mouseout", handleMouseUp);

  //   console.log(document.getElementById("thumb").clientLeft);
  //   console.log(getComputedStyle(document.getElementById("thumb")).getPropertyValue("left"));
  // }, []);

  // function handleMouseDown(e: MouseEvent) {
  //   mouseDown.current = e.offsetX;
  //   // console.log("handleMouseDown: ", e);
  // }

  // function handleMouseMove(e: MouseEvent) {
  //   if (mouseDown.current !== null) {
  //     console.log("handleMouseMove: ", mouseDown.current - e.offsetX);
  //     document.getElementById("thumb").style.transform = `translateX(${
  //       (e.offsetX - mouseDown.current) * 2.5
  //     }%)`;
  //   }
  // }

  // function handleMouseUp(e: MouseEvent) {
  //   mouseDown.current = null;
  //   // console.log("handleMouseUp: ", e);
  // }

  const { onToggleTheme, theme } = useContext(ThemeContext);

  return (
    <div onClick={onToggleTheme} className={classes.container}>
      <span className={classes.icon}>🌜</span>
      <span className={classes.icon}>🌞</span>
      <div
        id="thumb"
        ref={thumbRef}
        className={classnames(classes.thumb, {
          [classes.darkMode]: theme === "dark",
        })}
      />
    </div>
  );
};

export default Switch;
