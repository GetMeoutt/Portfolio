"use client";
import React from "react";
import {FloatingNav} from "@/components/ui/floating-navbar";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Feather } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  

  return (
   
        
    <div className="relative w-full h-screen bg-white">
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "#home",
          },
          
          {
            name: "project",
            link: "#projects",
          },
          {
            name: "Contact",
            link: "#contact",
          }
        ]}/>    
      <div className="absolute top-1/4 right-48">
      <h1 className=" text-6xl font-bold">Hi there! <br></br><div className="flex text-2xl"><p > I'm</p> <p className="text-violet-900 ml-1"><Typewriter  words={[" Tom"," technology enthusiast"]} cursor={true} loop={false}></Typewriter></p><br></br></div><p className="text-xl font-extralight">A current student at BCIT<br></br> in the Computer Information Technology program</p></h1>
      <div className="skills flex flex-wrap space-x-2 px-1">
      <div className="s">python</div> 
      <div className="s">javascript</div> 
      <div className="s">networking</div> 
      <div className="s">linux</div> 
      <div className="w-full"></div> {/* Break line here */}
      <div className="s">html</div>
      <div className="s">css</div> 
      <div className="s">sql</div> 
      <div className="s">R</div>
    </div>
      </div>
      <div className="container relative w-full h-full m-0">
        <div className="triangle absolute bottom-0 left-0 w-full h-[30vh] bg-slate-700 z-10" style={{ clipPath: "polygon(100% 100%, 0% 100%, 0 0%)" }}></div>
           <div className="profile absolute top-14 right-72 ">
        </div>

      <div id="home"></div>
      </div>
      
      <h1 className="my-10 text-4xl m-10" id="projects">Projects</h1>
      <Fade>
        <div className="flex gap-4 mx-10 flex-row flex-wrap self-center ">
          <Card title={"Discord Bot project"} picture={"img/discord_project.png"} description={"ahdsfjksdfhj sd hfjksdfhj dsjkf hskdjf df jshdfjk d djfhjsdkfh"}></Card>
          <Card title={"Discord Bot project"} picture={"img/discord_project.png"} description={"ahdsfjksdfhj sd hfjksdfhj dsjkf hskdjf df jshdfjk d djfhjsdkfh "} link={"https://github.com/"}></Card>
          <Card title={"Discord Bot project"} picture={"img/discord_project.png"} description={"ahdsfjksdfhj sd hfjksdfhj dsjkf hskdjf df jshdfjk d djfhjsdkfh "} link={"https://github.com/"}></Card>
          <Card title={"Discord Bot project"} picture={"img/discord_project.png"} description={"ahdsfjksdfhj sd hfjksdfhj dsjkf hskdjf df jshdfjk d djfhjsdkfh "} link={"https://github.com/"}></Card>
          <Card title={"Discord Bot project"} picture={"img/discord_project.png"} description={"ahdsfjksdfhj sd hfjksdfhj dsjkf hskdjf df jshdfjk d djfhjsdkfh "} link={"https://github.com/"}></Card>
        </div>
      </Fade>
    </div>
  );
};


