import React from "react";
import Typography from "../Typography/Typography";
import Styles from "./Navigation.module.css";
import Categories from "../NavLinks/Categories/Categories";
import BookNotes from "../NavLinks/BookNotes/BookNotes";
import Library from "../NavLinks/Library/Library";
import Profile from "../NavLinks/Profile/Profile";

function Navigation() {
  return (
    <div className={Styles.nav}>
      <Categories />
      <BookNotes />
      <Library />
      <Profile />
    </div>
  );
}

export default Navigation;
