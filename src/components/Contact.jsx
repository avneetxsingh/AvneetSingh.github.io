import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { docker } from "../assets"

function Contact() {
  const circleStyle = {
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    top: "50%",
    transform: "translateY(-50%)",
    left: "0",
    transition: "background-color 0.3s", // Added transition for smoother hover effect
  };

  const linkStyle = {
    position: "relative",
    paddingLeft: "30px",
    transition: "color 0.3s", // Added transition for smoother hover effect
  };

  const linkHoverStyle = {
    color: "#00a8e6", // Change to the desired hover color
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Social Links</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <a
            href="https://www.linkedin.com/in/avneetxsingh"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline'
            style={{ ...linkStyle, ...(circleStyle.left === "0" && linkHoverStyle) }}
          >
            <div style={circleStyle}></div>
            LinkedIn
          </a>
          <a
            href="https://github.com/avneetxsingh"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline'
            style={{ ...linkStyle, ...(circleStyle.left === "0" && linkHoverStyle) }}
          >
            <div style={circleStyle}></div>
            GitHub
          </a>
          <a
            href={docker} // Update with the actual path to your PDF resume
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline'
            style={{ ...linkStyle, ...(circleStyle.left === "0" && linkHoverStyle) }}
          >
            <div style={circleStyle}></div>
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
