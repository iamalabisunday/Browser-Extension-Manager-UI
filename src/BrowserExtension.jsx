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
import JSONWizard from "./images/logo-json-wizard.svg";
import TabMaster from "./images/logo-tab-master-pro.svg";
import ViewportBuddy from "./images/logo-viewport-buddy.svg";
import MarkupNotes from "./images/logo-markup-notes.svg";
import GridGuides from "./images/logo-grid-guides.svg";
import PalettePicker from "./images/logo-palette-picker.svg";
import LinkChecker from "./images/logo-link-checker.svg";
import DOMSnapshot from "./images/logo-dom-snapshot.svg";
import ConsolePlus from "./images/logo-console-plus.svg";

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
    {
      id: 4,
      icon: JSONWizard,
      title: "JSONWizard",
      paragraph:
        "Formats, validates, and prettifies JSON responses in browser.",
      active: true,
    },
    {
      id: 5,
      icon: TabMaster,
      title: "TabMaster Pro",
      paragraph: "Organizes browser tabs into groups and sessions.",
      active: true,
    },
    {
      id: 6,
      icon: ViewportBuddy,
      title: "ViewportBuddy",
      paragraph:
        "Simulates various screen resolutions directly within the browser.",
      active: true,
    },
    {
      id: 7,
      icon: MarkupNotes,
      title: "Markup Notes",
      paragraph:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      active: true,
    },
    {
      id: 8,
      icon: GridGuides,
      title: "GridGuides",
      paragraph:
        "Overlay customizable grids and alignment guides on any webpage.",
      active: true,
    },
    {
      id: 9,
      icon: PalettePicker,
      title: "Palette Picker",
      paragraph: "Instantly extracts color palettes from any webpage.",
      active: true,
    },
    {
      id: 10,
      icon: LinkChecker,
      title: "LinkChecker",
      paragraph: "Scans and highlights broken links on any page.",
      active: true,
    },
    {
      id: 11,
      icon: DOMSnapshot,
      title: "DOM Snapshot",
      paragraph: "Capture and export DOM structures quickly",
      active: true,
    },
    {
      id: 12,
      icon: ConsolePlus,
      title: "ConsolePlus",
      paragraph:
        "Enhanced developer console with advanced flitering and logging.",
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
    <div className="w-full min-h-screen pb-8 bg-[var(--color-background)] text-[var(--color-border)] transition-colors duration-300">
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
