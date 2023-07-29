import React, { useContext, useState } from "react";
import "./CreateNote.css";
import { VideoContext } from "../context/VideoContext";
const CreateNote = ({ close, id, preText, edit }) => {
  const [text, setText] = useState(preText?.note);
  const { addNote, editNote } = useContext(VideoContext);
  const handleSubmit = () => {
    if (edit) {
      editNote(preText._id, text);
    } else {
      if (!text || text.trim() === "") {
        return;
      } else {
        addNote(Number(id), text);
      }
    }
    close();
  };
  console.log(text);
  return (
    <div className="create-note-container">
      <h2>Add Note</h2>
      <textarea
        placeholder="Add note"
        id="note"
        rows={8}
        cols={40}
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
};

export default CreateNote;
