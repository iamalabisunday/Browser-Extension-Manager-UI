import React, { useState } from "react";
import logo from "./images/logo.svg";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

export default function BrowserExtension() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <div
        className={`w-full h-full ${
          isDarkTheme
            ? `bg-[var-(--colorNeutral-8)]`
            : `bg-[var-(--colorNeutral-2)`
        }`}
      >
        <main className="container w-[90%]  mx-auto">
          <header className="w-full h-auto mt-8 flex items-start justify-between">
            <img src={logo} alt="logo" />
            <img
              src={isDarkTheme ? iconMoon : iconSun}
              alt="theme"
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            />
          </header>
        </main>
      </div>
    </>
  );
}
