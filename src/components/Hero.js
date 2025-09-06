import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
            Student at VIT Chennai, pursuing Web Development and UI/UX Design.<br></br>
            And exlporing Game Development and AI/ML.
          </p>

          <div className="hero-actions">
            <button className="btn" onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>
              See Projects
            </button>
              <button className="btn ghost" onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})}>Contact Me</button>
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
      </div></div>
    </section>
  );
}
