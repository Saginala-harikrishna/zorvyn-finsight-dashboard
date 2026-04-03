import { useDispatch, useSelector } from "react-redux";
import { Menu } from "lucide-react";
import { setRole } from "../../features/role/roleSlice";
import {
  toggleDarkMode,
  toggleMobileSidebar,
} from "../../features/ui/uiSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const role = useSelector(
    (state) => state.role.currentRole
  );

  const darkMode = useSelector(
    (state) => state.ui.darkMode
  );

  return (
    <header
      className={`shadow-sm px-4 md:px-6 py-4 flex justify-between items-center transition-all duration-300 
       
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger */}
        <button
          onClick={() =>
            dispatch(toggleMobileSidebar())
          }
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-xl font-semibold">
          Financial Dashboard
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
       
        <select
          value={role}
          onChange={(e) =>
            dispatch(setRole(e.target.value))
          }
          className="border rounded-lg px-3 py-2 text-black"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;