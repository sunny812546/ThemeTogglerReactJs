import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContext from "./context/ThemeContext";
import colorsTheme from "./colors";

const App = () => {
  const themeHook = useState("light");
  const themeColor = colorsTheme[themeHook[0]];
  console.log("themeHook in app.js", themeHook);
  return (
    <>
      <div>
        <ThemeContext.Provider value={themeHook}>
          <ThemeToggler />
          <HeroSection />
        </ThemeContext.Provider>
      </div>
      <div style={themeColor}>Jay Veer Dada</div>
    </>
  );
};

export default App;
