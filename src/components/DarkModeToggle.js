import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle({ dark, setDark }) {
  return (
    <div style={{ position: "fixed", right: 20, top: 15, zIndex: 60 }}>
      <button
        onClick={() => setDark(!dark)}
        className="btn ghost"
        title="Toggle theme"
        aria-pressed={dark}
        style={{ display: "flex", alignItems: "center", gap: 8 }}
      >
        {dark ? <FaSun /> : <FaMoon />} <span style={{fontSize:13}}>{dark ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}
