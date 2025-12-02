import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <nav className="h-16 w-full bg-red-600 flex items-center gap-5 text-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
