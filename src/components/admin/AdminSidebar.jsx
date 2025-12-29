import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, ShoppingBag } from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r shadow-sm">
      <div className="h-16 flex items-center justify-center border-b font-bold text-xl">
        Admin Panel
      </div>

      <nav className="p-4 space-y-2">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <ShoppingBag size={18} />
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
