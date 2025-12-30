import { useAuth } from "../../hooks/useAuth";

const AdminNavbar = () => {
  const {handleLogout} = useAuth()
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-between px-6 z-10">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-5">
        <button onClick={handleLogout} className="bg-gray-400 py-2 text-white px-5 cursor-pointer rounded-sm">Logout</button>
        <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
