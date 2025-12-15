import { useContext, useState } from "react";
import { Menu, ShoppingBag, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItemsCount } = useContext(CartContext)

  const navlinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
  ]

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-blue-600">Aurora</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {
            navlinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600 cursor-pointer">
                <Link to={link.href}>{link.name}</Link>
              </li>

            ))
          }
          <li className="relative">
            <Link to={"/cart"}>
              <ShoppingCart /></Link>
            <span className="absolute bg-black text-xs h-4 w-4 rounded-full -right-1 -top-1 text-white grid place-content-center">{cartItemsCount}</span>
          </li>
          <li>
            <Link to={"/signup"} className="px-5 py-2 rounded-sm bg-blue-400 text-white">Signup</Link>
          </li>
          <li>
            <Link to={"/login"} className="px-5 py-2 rounded-sm bg-blue-600 text-white">Login</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${open ? "max-h-60" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-4 py-3 text-gray-700 font-medium space-y-3">
          {
            navlinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600 cursor-pointer">
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))
          }
          <Link to={"/cart"}>Cart</Link>
        </ul>
      </div>
    </header>
  );
}
