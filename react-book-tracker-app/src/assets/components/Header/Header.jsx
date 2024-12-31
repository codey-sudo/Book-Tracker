import React from "react";
import Styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Title from "../Title/Title";
function Header() {
  return (
    <div className={Styles.header}>
      <Title />
      <Navigation />
    </div>
  );
}

export default Header;
