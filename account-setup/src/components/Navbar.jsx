import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-gray-900 dark:to-gray-800 
                    shadow-lg fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          SPARKIN
        </h1>

        <div className="md:flex space-x-6 items-center">
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
