import React from "react";
import Background from "../../Background/Background";
import PencilIcon from "../../icons/PencilIcon";
import Styles from "./BookNotes.module.css";

function BookNotes() {
  return (
    <div className={Styles.bookNotes}>
      <Background>
        Book Notes
        <PencilIcon />
      </Background>
    </div>
  );
}

export default BookNotes;
