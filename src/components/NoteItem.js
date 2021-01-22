import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./NoteItem.css";

function NoteItem(props) {
  const { note, handleDeleteNote, handleEditNote } = props;
  const element = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faComments} size="3x" />
    </div>
  );
  return (
    <div className="note-container">
      {element}
      <div className="note-item">
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="action-container">
        <div onClick={() => handleEditNote(note)}>
          <FontAwesomeIcon icon={faEdit} size="lg" />
          <p>Edit</p>
        </div>
        <div onClick={() => handleDeleteNote(note.id)}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
