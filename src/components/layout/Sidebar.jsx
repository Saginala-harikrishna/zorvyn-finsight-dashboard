import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Bot,
  X,
} from "lucide-react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  closeMobileSidebar,
} from "../../features/ui/uiSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state) => state.ui.mobileSidebarOpen
  );

  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700";

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 min-h-screen bg-white  shadow-lg p-4 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">
          FinSight
        </h1>

        <nav className="space-y-2">
          <NavLink to="/" className={linkClass}>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            className={linkClass}
          >
            <Receipt size={20} />
            Transactions
          </NavLink>

          <NavLink
            to="/insights"
            className={linkClass}
          >
            <BarChart3 size={20} />
            Insights
          </NavLink>

          <NavLink
            to="/ai-copilot"
            className={linkClass}
          >
            <Bot size={20} />
            AI Copilot
          </NavLink>
        </nav>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              dispatch(closeMobileSidebar())
            }
          />

          <aside className="absolute left-0 top-0 w-64 h-full bg-white  shadow-lg p-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">
                FinSight
              </h1>

              <button
                onClick={() =>
                  dispatch(
                    closeMobileSidebar()
                  )
                }
              >
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-2">
              <NavLink
                to="/"
                className={linkClass}
                onClick={() =>
                  dispatch(
                    closeMobileSidebar()
                  )
                }
              >
                <LayoutDashboard size={20} />
                Dashboard
              </NavLink>

              <NavLink
                to="/transactions"
                className={linkClass}
                onClick={() =>
                  dispatch(
                    closeMobileSidebar()
                  )
                }
              >
                <Receipt size={20} />
                Transactions
              </NavLink>

              <NavLink
                to="/insights"
                className={linkClass}
                onClick={() =>
                  dispatch(
                    closeMobileSidebar()
                  )
                }
              >
                <BarChart3 size={20} />
                Insights
              </NavLink>

              <NavLink
                to="/ai-copilot"
                className={linkClass}
                onClick={() =>
                  dispatch(
                    closeMobileSidebar()
                  )
                }
              >
                <Bot size={20} />
                AI Copilot
              </NavLink>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;