import { href, NavLink } from "react-router-dom";
import { LayoutDashboard, Users, ShoppingBag } from "lucide-react";

const AdminSidebar = () => {
  const sidebarMenu = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Orders", href: "/admin/orders", icon: <ShoppingBag size={18} /> },
    { name: "Users", href: "/admin/users", icon: <Users size={18} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r shadow-sm">
      <div className="h-16 flex items-center justify-center border-b font-bold text-xl">
        Admin Panel
      </div>

      <nav className="p-4 space-y-2">
        {sidebarMenu?.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.href}
            end={menu.href === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
