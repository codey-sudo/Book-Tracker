import React from "react";
import Styles from "./ButtonBase.module.css";

function ButtonBase({ children, onClick, className }) {
  return (
    <div className={`${Styles.button} ${className}`} onClick={onClick}>
      <span className={Styles.buttonLabel}>{children}</span>
    </div>
  );
}

export default ButtonBase;
