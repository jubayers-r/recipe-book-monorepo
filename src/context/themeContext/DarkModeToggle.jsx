import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-black">
      {darkMode ? <FaRegMoon size={30} /> : <LuSunMedium size={30} />}
    </button>
  );
}
