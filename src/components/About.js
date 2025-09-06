import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about container">
      <div style={{display:"flex", flexDirection:"column", gap:18}}>
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>About Me</motion.h2>
        <motion.div className="about-grid" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
          <div>
            <div className="about-card">
              <p>
                I am a Computer Science and Engineering undergraduate at VIT Chennai,pursuing Web Development and UI/UX Design.
                 I love building clean, efficient, and user-friendly web applications.Beyond web technologies, my next interest 
                 is going towards Game Development and AI/ML.I'm passionate about learning new technologies 
                 and continuously improving my skills.<br></br><br></br>
                 What excites me most is creating things that people can interact with—something that feels simple, smooth, and meaningful.  
At my core, I’m a learner, a builder, and someone who enjoys turning imagination into reality.
              </p>

              <div style={{marginTop:16}}>
                <h3 style={{marginBottom:8}}>Tech & Tools</h3>
                <div className="skills">
                  <div className="skill">React</div>
                  <div className="skill">JavaScript (ES6+)</div>
                  <div className="skill">HTML & CSS</div>
                  <div className="skill">Framer Motion</div>
                  <div className="skill">Git</div>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="about-card">
              <h3>Fun Facts</h3>
              <ul style={{marginTop:10, color:"var(--muted)"}}>
                <li>Curious and love learning new things🔍</li>
                <li>Love Working out💪</li>
                <li>Enjoy watching Anime during my free time🌸</li>
              </ul>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
