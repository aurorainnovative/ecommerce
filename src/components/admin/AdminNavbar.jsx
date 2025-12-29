const AdminNavbar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b flex items-center justify-between px-6 z-10">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default AdminNavbar;
