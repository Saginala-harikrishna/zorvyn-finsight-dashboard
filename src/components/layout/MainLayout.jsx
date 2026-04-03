import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const darkMode = useSelector(
    (state) => state.ui.darkMode
  );

  return (
    <div
      className={`min-h-screen flex transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;