"use client";
import React from "react";

import  Navbar  from "@/components/ui/navbar";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/projects";
import Skills from "@/components/ui/skills";
import { Contact } from "@/components/ui/contact";
import Project2 from "@/components/ui/project2";
import Skills2 from "@/components/ui/skills2";
import Contact2 from "@/components/ui/contact2";
export default async function Home() {


  return (
   
    <div className=" overflow-hidden bg-[rgb(20,19,17)]">
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      {/* <Projects /> */}
    <Project2/>
    <Skills2/>
      <Contact2 />   
    </div>
    
  );
}
