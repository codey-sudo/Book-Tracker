import React, { useState } from "react";
import FormBackgroundLayer from "../FormBackgroundLayer/FormBackgroundLayer";
import FieldComponent from "../FieldComponent/FieldComponent";
import Styles from "./AddBookForm.module.css";

function AddBookForm() {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Category: "",
  });

  // const bookFormButton = {
  //   fontSize: "1rem",
  //   marginTop: "2rem",
  //   zIndex: "100",
  //   position: "relative",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "44px",
  //   background: "#0da2f3",
  //   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  //   borderRadius: "11px",
  //   color: "aliceblue",
  //   border: "none",
  //   padding: "10px 100px",
  //   whiteSpace: "nowrap",
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <FormBackgroundLayer>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <FieldComponent
          type="text"
          name="Title"
          placeholder="Title"
          value={formData.Title}
          onChange={handleChange}
        />
        <FieldComponent
          type="text"
          name="Author"
          placeholder="Author"
          value={formData.Author}
          onChange={handleChange}
        />

        <FieldComponent
          type="text"
          name="Category"
          placeholder="Category"
          value={formData.Category}
          onChange={handleChange}
        />
      </form>

      <button className={Styles.bookFormButton}>Add to library</button>
    </FormBackgroundLayer>
  );
}

export default AddBookForm;
