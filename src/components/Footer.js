import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer container">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ fontWeight: 700 }}>Sai Sandeep Seelam</div>
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div className="socials">
          <a
            href="https://github.com/sai-sandeep-seelam"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sai-sandeep-seelam-279b63331/"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* Gmail link */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=saisandeepseelam@gmail.com"
            aria-label="gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        <div style={{ color: "var(--muted)", fontSize: 18 }}>
          @ {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
