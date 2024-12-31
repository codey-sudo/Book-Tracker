import React from "react";
import Background from "../../Background/Background";
import BookIcon from "../../icons/BookIcon";
import Styles from "./Library.module.css";

function Library() {
  return (
    <div className={Styles.library}>
      <Background>
        Library
        <BookIcon />
      </Background>
    </div>
  );
}

export default Library;
