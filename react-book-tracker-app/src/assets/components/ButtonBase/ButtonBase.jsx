import React from "react";
import Styles from "./ButtonBase.module.css";

function ButtonBase({ children }) {
  return (
    <div className={Styles.button}>
      <span className={Styles.buttonLabel}>{children}</span>
    </div>
  );
}

export default ButtonBase;
