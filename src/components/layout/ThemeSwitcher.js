import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return (
    <div className="theme-switcher" onClick={handleThemeChange}>
      <svg viewBox="0 0 13.31 23" version="1">
        <path
          fill="#fff"
          d="M8.86 18.43c.16 0 .28-.14.28-.3v-.3c0-.18-.12-.32-.28-.32h-4.4c-.16 0-.28.18-.28.35v.3c0 .17.12.3.28.3zm0 1.34c.16 0 .28-.14.28-.3v-.3c0-.18-.12-.32-.28-.32h-4.4c-.16 0-.28.14-.28.3v.3c0 .18.12.32.28.32zm0 1.37c.16 0 .28-.14.28-.32v-.3c0-.16-.12-.3-.28-.3h-4.4c-.16 0-.28.14-.28.3v.3c0 .18.12.32.28.32zm-.76.46c-.25.53-.8.9-1.44.9-.63 0-1.2-.38-1.46-.9h2.9z"
        ></path>
        <path
          className="bulb"
          d="M6.66.5C3.26.5.5 3.26.5 6.66c0 1.12.3 2.16.82 3.07 1.5 2.72 1.9 4.25 2.16 5.73.2 1.24.5 1.53 1.43 1.53h3.54c.95 0 1.23-.3 1.44-1.57.25-1.48.65-3 2.16-5.73.5-.9.82-1.94.82-3.06C12.86 3.27 10.16.5 6.7.5z"
        ></path>
      </svg>
    </div>
  );
};

export default ThemeSwitcher;
