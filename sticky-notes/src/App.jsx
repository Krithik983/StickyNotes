import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Buttons";
import NotesList from "./components/NotesList"; // Import NotesList instead of StickyNotes
import NotesProvider from "./store/notes-store";

function App() {
  return (
    <NotesProvider>
      <Buttons />
      <NotesList />
    </NotesProvider>
  );
}

export default App;
