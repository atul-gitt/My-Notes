import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

import "./NoteCreation.css";

function NoteCreation({ addNote, isEditing, editNode, handleEdit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setTitle(`${isEditing ? editNode.title : ""}`);
    setDesc(`${isEditing ? editNode.description : ""}`);
  }, [isEditing, editNode]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      title: title,
      description: desc,
    };

    if (isEditing) {
      newNote.id = editNode.id;
      handleEdit(newNote);
    } else {
      newNote.id = v4();
      addNote(newNote);
    }
    setDesc("");
    setTitle("");
  };

  return (
    <div className="form-container" onSubmit={handleFormSubmit}>
      <form className="form">
        <input
          className="form-input"
          placeholder="TITLE"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="form-input"
          placeholder="DESCRIPTION"
          required
          rows={5}
          value={desc}
          onChange={handleDescChange}
        ></textarea>
        <button className="form-input form-btn">
          {`${isEditing ? "UPDATE" : "SUBMIT"}`}
        </button>
      </form>
    </div>
  );
}

export default NoteCreation;
