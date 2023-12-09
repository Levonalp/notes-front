import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
  const [note, setNote] = useState([]);

  const getNote = () => {
    axios
      .get("https://notepadapi.onrender.com/app/notes")
      .then((response) => setNote(response.data))
      .catch((error) => console.error(error));
  };

  const handleCreate = (addNote) => {
    axios
      .post("https://notepadapi.onrender.com/app/notes", addNote)
      .then(() => getNote());
  };

  const handleDelete = (event) => {
    axios
      .delete(`https://notepadapi.onrender.com/app/notes/${event.target.value}`)
      .then(() => getNote());
  };

  const handleUpdate = (editNote) => {
    axios
      .put(`https://notepadapi.onrender.com/app/notes/${editNote.id}`, editNote)
      .then(() => getNote());
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div>
      <div className="bg-teal-500 text-center text-white font-bold py-4 rounded-b-lg">
        <h1> Show notes</h1>
      </div>

      <div className="m-3  rounded-b-lg shadow-lg flex justify-center container-fluid ">
        <Add handleCreate={handleCreate} />
      </div>
      <div className="note container-fluid w-full">
        {note.map((note) => (
          <div
            className="note md-white rounded-md shadow-md flex flex-col text-center m-5"
            key={note.id}
          >
            <h4 className="text-md font-bold py-2">Note: {note.notes}</h4>
            <div className="flex justify-around py-1">
              <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-1 rounded-full">
                <Edit handleUpdate={handleUpdate} id={note.id} note={note} />
              </button>
              <button
                onClick={handleDelete}
                value={note.id}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
