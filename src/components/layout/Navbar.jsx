import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../features/role/roleSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const role = useSelector(
    (state) => state.role.currentRole
  );

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Financial Dashboard
      </h2>

      <select
        value={role}
        onChange={(e) =>
          dispatch(setRole(e.target.value))
        }
        className="border rounded-lg px-3 py-2"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </header>
  );
};

export default Navbar;