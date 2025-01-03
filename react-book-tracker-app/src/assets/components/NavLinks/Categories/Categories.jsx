import React from "react";
import Background from "../../Background/Background";
import CategoriesIcon from "../../icons/CategoriesIcon";
import Styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={Styles.categories}>
      <Background>
        Categories
        <CategoriesIcon />
      </Background>
    </div>
  );
}

export default Categories;
