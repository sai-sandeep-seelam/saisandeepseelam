import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.55 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-top">
          <div className="logo">
            <div className="logo-text">
              <code>&lt;/Sai Sandeep Seelam &gt;</code>
            </div>
          </div>

          <div aria-hidden="false">
            <DarkModeToggle dark={dark} setDark={setDark} />
          </div>
        </div>

        <nav>
          <div className="nav-links" role="navigation" aria-label="Primary">
            {sections.map((s) => (
              <a
                href={`#${s.id}`}
                key={s.id}
                onClick={(e) => onNavClick(e, s.id)}
                className={active === s.id ? "active" : ""}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
