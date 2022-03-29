import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import TextForms from "./TextForms.js";

function App() {
  const [mode, setMode] = useState({
    color: "light",
    className: "lightClass",
  });

  const toggleMode = () => {
    if (mode.color === "light") {
      setMode({ className: "darkClass", color: "dark" });
    } else {
      setMode({ className: "lightClass", color: "light" });
    }
  };

  return (
    <>
      <NavBar
        title="TextUtils"
        abouttext="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className={`${mode.className}`}>
        <TextForms mode={mode} />
      </div>
    </>
  );
}

export default App;
