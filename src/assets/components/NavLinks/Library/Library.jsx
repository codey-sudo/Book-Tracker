import React from "react";
import Background from "../../Background/Background";
import BookIcon from "../../icons/BookIcon";
import { Link } from "react-router-dom";
import Styles from "./Library.module.css";

function Library() {
  return (
    <Link to="/library" className={Styles.libraryLink}>
      <div className={Styles.library}>
        <Background>
          Library
          <BookIcon />
        </Background>
      </div>
    </Link>
  );
}

export default Library;
