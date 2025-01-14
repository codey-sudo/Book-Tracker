import React, { useState } from "react";
import FormBackgroundLayer from "../FormBackgroundLayer/FormBackgroundLayer";
import FieldComponent from "../FieldComponent/FieldComponent";
import Styles from "./AddBookForm.module.css";

function AddBookForm({ onAddBook, onClose }) {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Title || !formData.Author || !formData.Category) {
      console.error("All fields are required.");
      return;
    }

    onAddBook({ ...formData, id: Date.now() }); // Pass form data to parent
    setFormData({ Title: "", Author: "", Category: "" }); // Reset form
    onClose(); // Close the form after submission
  };

  return (
    <FormBackgroundLayer>
      <button
        className={Styles.closeFormButton}
        onClick={onClose}
        aria-label="Close form"
      >
        ×
      </button>
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
        <button type="submit" className={Styles.bookFormButton}>
          Add to Library
        </button>
      </form>
    </FormBackgroundLayer>
  );
}

export default AddBookForm;
