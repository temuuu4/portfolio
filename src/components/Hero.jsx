import { motion } from "framer-motion";
import profile from "../assets/gurd.JPG";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-container">

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>
            Hi, I’m <span>Temesegen</span>
          </h1>
          <h2>4th Year CSE Student</h2>
          <p>
            Focused on <strong>Web Development</strong> and <strong>Web Security</strong>.
            I build secure, practical web applications.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img src={profile} alt="Temesegen profile" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;
