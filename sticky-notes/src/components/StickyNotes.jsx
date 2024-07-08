import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { NotesData } from "../store/notes-store";

const StickyNotes = ({ note }) => {
  const { deleteNotes } = useContext(NotesData);
  return (
    <div className="card notes" style={{ width: "20rem" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deleteNotes(note.noteId)}
      >
        <MdDelete />
      </span>
      <div className="card-body">
        <div className="alert alert-success reaction" role="alert">
          <p className="card-text">{note.text}</p>
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;
