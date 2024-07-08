import { useContext, useRef } from "react";
import { NotesData } from "../store/notes-store";

const Buttons = () => {
  const inputElement = useRef();

  const { addNotes } = useContext(NotesData);

  const handleAddNote = () => {
    const noteText = inputElement.current.value;
    if (noteText.trim() !== "") {
      const note = {
        noteId: Date.now().toString(),
        text: noteText,
      };
      addNotes(note);
      inputElement.current.value = "";
    }
  };
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Sticky Notes</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input
            type="text"
            placeholder="Enter your notes here"
            ref={inputElement}
          />
          <button
            type="button"
            className="btn btn-success btn-lg px-4"
            onClick={handleAddNote}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
