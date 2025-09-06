import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";

const projects = [
  { title: "To-Do List", desc: "Hub for remembering tasks.", img: p1, url: "https://sandeeptodolisto.netlify.app/", target:"_blank" },
  { title: "Portfolio Website", desc: "A portfolio describing me ;)", img: p2, url: "#", target: "_blank" },
  { title: "CheatStack", desc: "Stack of Cheatsheets for programming languages\n(still under contruction)", img: p3, url: "#", target: "_blank" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>Projects</motion.h2>

      <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{once:true}}>
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{type:"spring", stiffness:300}}
          >
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <h3 style={{margin:0}}>{p.title}</h3>
              <p style={{margin:0, fontSize:13, opacity:0.95}}>{p.desc}</p>
              <div style={{marginTop:8}}>
                <a href={p.url} target={p.target} rel="noopener noreferrer"  className="btn" style={{textDecoration:"none"}}>View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
