import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Cart", href: "/cart" },
  ]

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Aurora</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {
            navlinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600 cursor-pointer">
                <Link to={link.href}>{link.name}</Link>
              </li>

            ))
          }
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
        </ul>
      </div>
    </header>
  );
}
