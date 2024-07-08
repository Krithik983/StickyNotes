import { createContext, useReducer } from "react";

const DEFAULT_NOTES = [
  {
    noteId: "1",
    text: "Let's go shopping. It's been a long time.",
  },
  {
    noteId: "2",
    text: "Gotta start working on my new projects",
  },
];

export const NotesData = createContext({
  notesList: DEFAULT_NOTES,
  addNotes: () => {},
  deleteNotes: () => {},
});

const notesReducer = (currNotes, action) => {
  let newNotes = currNotes;
  if (action.type === "DELETE_NOTE") {
    newNotes = currNotes.filter(
      (post) => post.noteId !== action.payload.noteId
    );
  } else if (action.type === "ADD_NOTE") {
    newNotes = [action.payload.note, ...currNotes];
  }
  return newNotes;
};

const NotesProvider = ({ children }) => {
  const [notesList, dispatchNotes] = useReducer(notesReducer, DEFAULT_NOTES);

  const addNotes = (note) => {
    dispatchNotes({
      type: "ADD_NOTE",
      payload: {
        note,
      },
    });
  };
  const deleteNotes = (noteId) => {
    dispatchNotes({
      type: "DELETE_NOTE",
      payload: {
        noteId,
      },
    });
  };
  return (
    <NotesData.Provider
      value={{
        notesList,
        addNotes,
        deleteNotes,
      }}
    >
      {children}
    </NotesData.Provider>
  );
};

export default NotesProvider;
