import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;

    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Enter note"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <button
        onClick={addNote}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ marginTop: "20px" }}>
            {note}

            <button
              onClick={() => deleteNote(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
