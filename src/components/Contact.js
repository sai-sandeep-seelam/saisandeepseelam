import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>Contact</motion.h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-grid">
            <input required placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input required type="email" placeholder="Your email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          </div>
          <textarea required rows="6" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
          <div style={{display:"flex", gap:12, alignItems:"center"}}>
            <button className="btn" type="submit">Send Message</button>
            {sent && <span style={{color:"var(--accent)", fontWeight:700}}>Message sent (UI only)</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
