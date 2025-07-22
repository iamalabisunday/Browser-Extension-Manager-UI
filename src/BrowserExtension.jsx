import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

export default function BrowserExtension() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  const togglehandle = (e) => {
    e.preventDefault();
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-full bg-[var(--background)]">
        <main className="container w-[90%] mx-auto">
          <header className="w-full h-auto mt-8 flex items-start justify-between">
            <img src={logo} alt="logo" />
            <img
              src={darkMode ? iconMoon : iconSun}
              alt="Icon switching mode between Sun/Moon"
              onClick={togglehandle}
              className="cursor-pointer"
            />
          </header>
        </main>
      </div>
    </>
  );
}
