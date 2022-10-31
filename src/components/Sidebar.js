import { Plus, Search } from "../icons/icons";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { displayForm, addNote } from "../features/notes";
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggleDisplay = () => {
    dispatch(displayForm());
  };
  return (
    <aside>
      <button className="search">
        <Search />
      </button>
      <button className="add" onClick={toggleDisplay}>
        <Plus />
      </button>
    </aside>
  );
};
export default Sidebar;
