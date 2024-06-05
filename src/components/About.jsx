import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import docker from "../assets/resume.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} style={{ position: 'relative' }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <motion.a
          href={docker}
          download="resume.pdf"
          className='resume-button'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <span>Download Resume</span>
        </motion.a>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Avneet Singh, a Computer Science Engineering student at The University of Toledo. 
        Proficient in Python, Django, HTML, JavaScript, and CSS, I'm actively seeking a summer
         internship to apply my skills. As an ECC IT Support Specialist and game developer, 
         I bring a diverse skill set. My projects, like a WhatsApp Automation Bot and a Hospital Management System,
          showcase efficiency and problem-solving. As Vice President of the Punjabi Student 
          Association and a published researcher, I bring technical prowess and collaboration. 
          Eager to contribute to real-world projects, I'm ready for an innovative work environment.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <style jsx>{`
        .resume-button {
          position: relative;
          display: inline-block;
          overflow: hidden;
          color: #fff;
          text-decoration: none;
          float: right; /* Position to the right */
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 10px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .resume-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .resume-button span {
          display: block;
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(About, "about");
