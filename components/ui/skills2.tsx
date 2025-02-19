import React from "react";
import { motion } from "framer-motion";
import Skillcard from "./skillscard";
export default function Skills() {
  return (
    <div className="relative w-full pt-64 text-gray-400 p-10 flex flex-row h-fit overflow-visible">
      {/* Title Section */}
      <div className="relative w-[40%] flex justify-end overflow-visible">
        <motion.h2
          className="text-8xl font-semibold font-mono -rotate-90 transform origin-left leading-none whitespace-nowrap mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          MY <br />
          <span className="text-[rgb(54,52,46)]">SKILLS</span>
        </motion.h2>
      </div>

      {/* Skills Section */}
      <motion.div
        className="flex items-center flex-wrap h-fit w-[60%] gap-5 -m-48 justify-center align-middle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Skillcard
        title="REACT"
        description="a JavaScript library for building fast."
        value={50}/>
        <Skillcard
        title="HTML"
        description="create a website using HTML."
        value={90}/>
        <Skillcard
        title="NETWORKING"
        description="create firewall rules, config network interface."
        value={75}/>
        <Skillcard
        title="DB"
        description="create, design, manage DB using SQL"
        value={75}/>
        <Skillcard
        title="PYTHON"
        description="proficient in coding pythong"
        value={95}/>
        <Skillcard
        title="BASH"
        description="able to code a automatic script in bash for linux OS"
        value={65}/>


      </motion.div>
    </div>
  );
}
