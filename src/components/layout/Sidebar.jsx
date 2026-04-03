import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Bot,
} from "lucide-react";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-200";

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">
        FinSight
      </h1>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/transactions" className={linkClass}>
          <Receipt size={20} />
          Transactions
        </NavLink>

        <NavLink to="/insights" className={linkClass}>
          <BarChart3 size={20} />
          Insights
        </NavLink>

        <NavLink to="/ai-copilot" className={linkClass}>
          <Bot size={20} />
          AI Copilot
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;