import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";
import "./index.css";
import ExtensionBox from "./ExtensionBox.jsx";
import ExtensionButton from "./ExtensionButton.jsx";
import DevImage from "./images/logo-devlens.svg";
import SpyImage from "./images/logo-style-spy.svg";
import SpeedImage from "./images/logo-speed-boost.svg";

export default function BrowserExtension() {
  // Theme toggle between light and dark mode
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

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Extension data
  const [extensions, setExtensions] = useState([
    {
      id: 1,
      icon: DevImage,
      title: "DevLens",
      paragraph:
        "Quickly inspect page layouts and visualize element boundaries.",
      active: true,
    },
    {
      id: 2,
      icon: SpyImage,
      title: "StyleSpy",
      paragraph: "Instantly analyze and copy CSS from any webpage element.",
      active: false,
    },
    {
      id: 3,
      icon: SpeedImage,
      title: "SpeedBoost",
      paragraph: "Optimizes browser resource usage to accelerate page loading.",
      active: true,
    },
  ]);

  // Filter state: All, Active, Inactive
  const [filter, setFilter] = useState("All");

  // Toggle individual extension active/inactive
  const toggleActive = (id) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, active: !ext.active } : ext))
    );
  };

  // Filter logic
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "Active") return ext.active;
    if (filter === "Inactive") return !ext.active;
    return true;
  });

  // Remove extension
  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  return (
    <div className="w-screen h-screen bg-[var(--color-background)] text-[var(--color-border)] transition-colors duration-300">
      <main className="container w-[85%] mx-auto">
        {/* Navbar */}
        <header className="w-full pt-6">
          <section className="w-full p-4 flex items-center justify-between bg-[var(--color-background-soft)] rounded-xl">
            <img src={logo} alt="logo" />
            <div
              className="w-12 h-12 rounded-xl bg-[var(--color-background-alt)] flex items-center justify-center cursor-pointer"
              onClick={toggleTheme}
            >
              <img src={darkMode ? iconSun : iconMoon} alt="Toggle theme" />
            </div>
          </section>
        </header>

        {/* Header Section */}
        <section className="w-full flex flex-col gap-4 md:flex-row justify-between items-center text-center font-bold mb-4 mt-10 pt-4 pb-4">
          <h1 className="text-3xl whitespace-nowrap">Extensions List</h1>
          <article className="flex gap-4">
            <ExtensionButton name="All" onClick={() => setFilter("All")} />
            <ExtensionButton
              name="Active"
              onClick={() => setFilter("Active")}
            />
            <ExtensionButton
              name="Inactive"
              onClick={() => setFilter("Inactive")}
            />
          </article>
        </section>

        {/* Extension Cards */}
        <section className="w-full grid md:grid-cols-3 gap-4">
          {filteredExtensions.map((ext) => (
            <ExtensionBox
              key={ext.id}
              id={ext.id}
              icon={ext.icon}
              title={ext.title}
              paragraph={ext.paragraph}
              active={ext.active}
              toggleActive={toggleActive}
              removeExtension={removeExtension}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
