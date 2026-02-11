import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-buttons">

        <motion.a
          href="https://github.com/temuuu4"
          target="_blank"
          className="contact-btn"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
          GitHub
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/temesegen-mekonnen-14b5ba3ab"
          target="_blank"
          className="contact-btn"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
          LinkedIn
        </motion.a>

        <motion.a
          href="mailto:temesegen.mekonnen@astu.edu.et"
          className="contact-btn"
          whileHover={{ y: -5 }}
        >
          <FaEnvelope />
          Email
        </motion.a>

      </div>
    </section>
  );
}

export default Contact;
