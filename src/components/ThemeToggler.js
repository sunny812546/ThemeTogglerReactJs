import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import colorsTheme from "../colors";
const ThemeToggler = () => {
  const [themeColor, setThemeColor] = useContext(ThemeContext);
  console.log(themeColor, "ThemeColors");
  const themeColors = colorsTheme[themeColor];
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: `${themeColors.backgroundColor}`,
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          setThemeColor(themeColor === "dark" ? "light" : "dark");
        }}
      >
        {themeColor === "dark" ? "🌜" : "☀"}
      </span>
    </div>
  );
};

export default ThemeToggler;
