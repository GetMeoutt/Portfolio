import { motion } from "framer-motion";
import Image from "next/image";
import {ArrowUpOutlined} from "@ant-design/icons";
import CardL from "./card-l";
import CardR from "./card-r";
export default function Project2() {
  return (
    <div className="relative w-full bg-[rgb(20,19,17)] text-gray-400 p-10 flex justify-center items-center flex-col gap-10">
      <div className="flex flex-col items-start z-30">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="text-8xl font-semibold font-mono"
        >
          ACADEMIC &
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.3 }}
          className="text-8xl font-semibold font-mono text-[rgb(54,52,46)] mb-10"
        >
          PERSONAL PROJECTS
        </motion.h2>
      </div>
        
        <CardL
          img="/img/discord_project.png"
          title="DISCORD REMINER BOT"
          description="A personal perject that I made using discord API and node.js to
          allows users to set a reminder for a specific time and date. The bot
          will send a message to the user when the time is up. Using framework
          of discord.js, nodejs HTML and JS."
        />
        <CardR
          img="/img/unolingo-project.png"
          title="LANGUAGE LEARNING APP UNOLIGO"
          description="A language learning app that allows users to practice their
          language skills and learn new words. In this project I was charge as
          a Frontend developer. I made the UI/UX design and implemented the
          functionality. Including the responsive design and user interface."
        />
        <CardL
          img="/img/cypresshill-project.png"
          title="CYPRESS HILL SCORECARD"
          description=" A academic project that I and my team made for a client. In this
                project we design the scorecard function in the Cypress Hills
                website. Using framework of react, GraphQL, TailwindCSS and
                Typescript . I was roled as a Frontend developer. I made the UI/UX
                design and implemented the functionality using components library
                like antd."
        />
      
    </div>
  );
}
