import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import colorsTheme from "../colors";

const HeroSection = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const themeColor = colorsTheme[theme];
  return (
    <div style={themeColor}>
      <h1>This is a ContextAPI</h1>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        style={{
          backgroundColor: `${themeColor.color}`,
          color: `${themeColor.backgroundColor}`,
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default HeroSection;
