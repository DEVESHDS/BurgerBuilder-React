import React from "react";
import classes from "./button.module.css";

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.button, classes[props.btntype]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
