import React, { useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;

    script.onload = () => {
      if (window.FinisherHeader) {
        initFinisher();
      }
    };

    document.body.appendChild(script);

    // Watch for dark/light mode toggle (body class changes)
    const observer = new MutationObserver(() => {
      if (window.FinisherHeader) {
        initFinisher();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  const initFinisher = () => {
    const isDark = document.body.classList.contains("dark");

    const lightConfig = {
      count: 100,
      size: { min: 1, max: 20, pulse: 0 },
      speed: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
      colors: {
        background: "#ffffff", // white background
        particles: ["#046ca0"], // gray particles
      },
      blending: "screen",
      opacity: { center: 0, edge: 1 },
      skew: 0,
      shapes: ["c", "t", "s"],
    };

    const darkConfig = {
      count: 100,
      size: { min: 1, max: 20, pulse: 0 },
      speed: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
      colors: {
        background: "#0b0f17", // dark navy background
        particles: ["#046ca0"], // blue particles
      },
      blending: "screen",
      opacity: { center: 0, edge: 1 },
      skew: 0,
      shapes: ["c", "t", "s"],
    };

    // Kill the old canvas before re-initializing
    const oldCanvas = document.getElementById("finisher-canvas");
    if (oldCanvas) oldCanvas.remove();

    // Re-init with correct config
    new window.FinisherHeader(isDark ? darkConfig : lightConfig);
  };

  return (
    <section id="hero" className="hero" >
      {/* background container */}
      <div
        className="finisher-header"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          zIndex: -9999,
        }}
      ></div>

      {/* hero content */}
      <div className="hero-border">
        <div className="container hero-inner">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag">Hi!</span>
            <h1>
              I'm <span style={{ color: "var(--accent)" }}>Sandeep</span>
            </h1>
            <p>
              Student at VIT Chennai, pursuing Web Development and UI/UX Design.
              <br />
              And exploring Game Development and AI/ML.
            </p>

            <div className="hero-actions">
              <button
                className="btn"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                See Projects
              </button>
              <button
                className="btn ghost"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7 }}
          >
            <img src={heroImg} alt="profile" className="hero-photo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
