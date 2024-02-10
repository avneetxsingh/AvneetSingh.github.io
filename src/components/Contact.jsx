import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

function Contact() {
  const buttonStyle = {
    display: "inline-block",
    borderRadius: "999px", // Large value to create a rounded rectangle
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#4a90e2", // Button background color
    color: "#fff", // Button text color
    padding: "12px 24px", // Adjust padding as needed - change the values here to modify the button size
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", // 3D shadow effect
    transition: "transform 0.3s, box-shadow 0.3s", // Added transition for smoother hover effect
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
            className='text-white font-medium mb-4 hover:underline hover:text-blue-400'
            style={{ ...buttonStyle, ...linkStyle }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/avneetxsingh"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline hover:text-blue-400'
            style={{ ...buttonStyle, ...linkStyle }}
          >
            GitHub
          </a>
          <a
            href="https://www.reddit.com/user/sidxpaul"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline hover:text-blue-400'
            style={{ ...buttonStyle, ...linkStyle }}
          >
            Reddit
          </a>
          <a
            href="https://www.instagram.com/avneetxsingh_/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium mb-4 hover:underline hover:text-blue-400'
            style={{ ...buttonStyle, ...linkStyle }}
          >
            Instagram
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
