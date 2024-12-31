import React from "react";
import Styles from "./ButtonBase.module.css";

function ButtonBase({ children }) {
  return (
    <div className={Styles.button}>
      <div className={Styles.buttonLabel}>{children}</div>
    </div>
  );
}

export default ButtonBase;
