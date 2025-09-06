import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

  const onNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <span className="dot" />
            <div style={{fontSize:25, opacity:0.85}}><code>&lt;/Sai Sandeep Seelam &gt;</code></div>
        </div>

        <nav>
          <div className="nav-links">
            {sections.map((s) => (
              <button 
                key={s.id}
                onClick={() => onNavClick(s.id)}
                className={active === s.id ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* mobile */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          {open && (
            <div className="mobile-menu" role="menu">
              {sections.map((s) => (
                <button key={s.id} onClick={() => onNavClick(s.id)} style={{cursor:"pointer"}}>
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}