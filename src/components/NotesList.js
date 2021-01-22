import React from "react";

import NoteItem from "./NoteItem";
import "./NotesList.css";

function NotesList({ notes, deleteNote, setEditNode }) {
  return (
    <div className="notes-container">
      {notes.length === 0
        ? "No Notes. May create one?"
        : notes.map((note) => (
            <NoteItem
              note={note}
              key={note.id}
              handleDeleteNote={deleteNote}
              handleEditNote={setEditNode}
            />
          ))}
    </div>
  );
}

export default NotesList;
