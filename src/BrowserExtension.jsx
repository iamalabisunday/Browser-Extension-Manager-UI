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
      <main className="container w-[85%] mx-auto">
        {/* NAVBAR SECTION */}
        <header className="w-full h-auto pt-6">
          <section className="w-full h-auto p-4 flex items-center justify-between bg-[var(--color-background-soft)] rounded-xl">
            <img src={darkMode ? logo : logo} alt="logo" />
            <div className="w-12 h-12 rounded-xl bg-[var(--color-background-alt)] flex items-center justify-center cursor-pointer">
              <img
                src={darkMode ? iconSun : iconMoon}
                alt="Toggle theme"
                onClick={toggleTheme}
              />
            </div>
          </section>
        </header>
        {/* HEADER SECTION */}
        <section className="w-full flex flex-col gap-4 md:flex-row justify-between items-center text-center font-bold mb-4 mt-10 pt-4 pb-4">
          <h1 className="text-3xl whitespace-nowrap">Extensions List</h1>
          <article className="flex gap-4">
            <button className="w-fit h-10 p-4 font-medium rounded-4xl bg-[var(--color-accent)] text-[var(--color-background)] cursor-pointer flex justify-center items-center">
              All
            </button>
            <button className="w-fit h-10 p-4 font-medium rounded-4xl bg-[var(--color-background-soft)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] active:bg-[var(--color-accent)] active:text-[var(--color-background)] text-[var(--color-surface)] cursor-pointer flex justify-center items-center">
              Active
            </button>
            <button className="w-fit h-10 p-4 font-medium rounded-4xl bg-[var(--color-background-soft)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] active:bg-[var(--color-accent)] active:text-[var(--color-background)] text-[var(--color-surface)] cursor-pointer flex justify-center items-center">
              Inactive
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}
