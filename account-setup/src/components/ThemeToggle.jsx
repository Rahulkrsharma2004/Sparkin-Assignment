import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 flex items-center justify-center gap-2 w-12 h-12 rounded-full 
                 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-gray-800 dark:to-gray-900
                 shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <FaMoon className="text-white text-xl animate-pulse" />
      ) : (
        <FaSun className="text-yellow-400 text-xl animate-spin-slow" />
      )}
    </button>
  );
};

export default ThemeToggle;
