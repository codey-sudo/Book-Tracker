import React from "react";
import Styles from "./FieldComponent.module.css";

function FieldComponent({ type = "text", placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      className={Styles.field}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default FieldComponent;
