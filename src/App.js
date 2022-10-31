import "./App.css";
import Sidebar from "./components/Sidebar";
import NoteWrap from "./components/NoteWrap";
import NoteForm from "./components/NoteForm";
import { useSelector } from "react-redux";
function App() {
  const { notes } = useSelector((state) => state);
  const { formDisplay } = notes;
  return (
    <div className="App">
      <Sidebar />
      <NoteWrap />
      {formDisplay && <NoteForm />}
    </div>
  );
}

export default App;
