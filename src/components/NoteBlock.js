import { Check, Remove } from "../icons/icons";
import "./NoteBlock.css";
const NoteBlock = ({ id, note, read }) => {
  return (
    <div className={read ? "noteBlock read" : "noteBlock"}>
      <div className="note-head">
        <button className="check-btn">
          <Check />
        </button>
        <button className="delete-btn">
          <Remove />
        </button>
      </div>
      <div className="note">
        <p>{note}</p>
      </div>
    </div>
  );
};
export default NoteBlock;
