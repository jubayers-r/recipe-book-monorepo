import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import * as Tooltip from "@radix-ui/react-tooltip";

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
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-black "
        >
          {darkMode ? (
            <FaRegMoon className="text-xl sm:text-2xl md:text-3xl" />
          ) : (
            <LuSunMedium className="text-xl sm:text-2xl md:text-3xl" />
          )}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          align="center"
          sideOffset={8}
          style={{
            backgroundColor: "#3a3b3c",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "12px",
            fontSize: "14px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
            userSelect: "none",
          }}
        >
          Dark/Light Mode
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
