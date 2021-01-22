import React, { useState } from "react";

import NoteCreation from "./components/NoteCreation";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [noteToEdit, SetNoteToEdit] = useState({});

  const addNoteHandler = (note) => {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
    setEditing(false);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const handleEdit = (updatedNote) => {
    const updateNotes = notes.map((note) => {
      return note.id === updatedNote.id ? updatedNote : note;
    });
    setNotes([...updateNotes]);
    setEditing(false);
  };
  const handleSetEditing = (note) => {
    SetNoteToEdit(note);
    setEditing(true);
  };
  return (
    <div className="App">
      <h1>My Notes</h1>
      <NoteCreation
        addNote={addNoteHandler}
        isEditing={isEditing}
        editNode={noteToEdit}
        handleEdit={handleEdit}
      />
      <NotesList
        notes={notes}
        deleteNote={handleDeleteNote}
        setEditNode={handleSetEditing}
      />
    </div>
  );
}

export default App;
