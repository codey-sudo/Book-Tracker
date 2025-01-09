import React from "react";
import Styles from "./ButtonBase.module.css";

function ButtonBase({ children, onClick }) {
  return (
    <div className={Styles.button} onClick={onClick}>
      <span className={Styles.buttonLabel}>{children}</span>
    </div>
  );
}

export default ButtonBase;
