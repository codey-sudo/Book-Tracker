import React from "react";
import Background from "../../Background/Background";
import PersonIcon from "../../icons/PersonIcon";
import Styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={Styles.profile}>
      <Background>
        Profile
        <PersonIcon />
      </Background>
    </div>
  );
}

export default Profile;
