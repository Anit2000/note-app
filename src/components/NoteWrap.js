import { useSelector } from "react-redux";
import { Plus } from "../icons/icons";
import NoteBlock from "./NoteBlock";
import "./NoteWrap.css";
const NoteWrap = () => {
  const { notes } = useSelector((state) => state);
  if (notes.notes.length >= 1) {
    return (
      <main>
        <div className="notes-wrap">
          {notes.notes.map((note) => (
            <NoteBlock key={note.id} {...note} />
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h2>Add a note</h2>
        <button className="plus-note">
          <Plus />
        </button>
      </main>
    );
  }
};
export default NoteWrap;
