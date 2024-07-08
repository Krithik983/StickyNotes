import { useContext } from "react";
import StickyNotes from "./StickyNotes";
import { NotesData } from "../store/notes-store";

const NotesList = () => {
  const { notesList } = useContext(NotesData);

  return (
    <center>
      {notesList.map((note) => (
        <StickyNotes key={note.noteId} note={note} />
      ))}
    </center>
  );
};

export default NotesList;
