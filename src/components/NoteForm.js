import "./NoteForm.css";
import { Close } from "../icons/icons";
import { useDispatch } from "react-redux";
import { displayForm } from "../features/notes";
const NoteForm = () => {
  const dispatch = useDispatch();
  const toggleDisplay = () => {
    dispatch(displayForm());
  };
  return (
    <form>
      <div className="form-head">
        <button className="close-form" onClick={toggleDisplay}>
          <Close />
        </button>
      </div>
      <textarea placeholder="Add note here" rows="8" cols="40" />
      <button type="submit">Add</button>
    </form>
  );
};
export default NoteForm;
