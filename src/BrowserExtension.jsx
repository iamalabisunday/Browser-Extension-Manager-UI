import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";
import "./index.css"; // or App.css, wherever your variables are

export default function BrowserExtension() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen bg-[var(--color-background)] text-[var(--color-border)] transition-colors duration-300">
      <main className="container w-[90%] mx-auto">
        <header className="w-full h-auto pt-8 flex items-start justify-between">
          <img src={logo} alt="logo" />
          <img
            src={darkMode ? iconSun : iconMoon}
            alt="Toggle theme"
            onClick={toggleTheme}
            className="cursor-pointer"
          />
        </header>

        <section className="mt-10">
          <h1 className="text-3xl font-bold mb-4">Hello Theme!</h1>
          <p className="text-[var(--color-text-muted)]">
            This UI respects your current theme using CSS variables and
            Tailwind.
          </p>
        </section>
      </main>
    </div>
  );
}
