"use client";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Projects() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.75, ease: "easeInOut" }}
  className=""
>
  {/* Background Gradient (Lowest Layer) */}
  <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(245, 245, 245)" /* Light Gray */
    gradientBackgroundEnd="rgb(220, 220, 220)" /* Soft Gray */
    firstColor="200, 200, 200" /* Medium Gray */
    secondColor="180, 180, 180" /* Slightly Darker Gray */
    thirdColor="160, 160, 160" /* Muted Gray */
    fourthColor="140, 140, 140" /* Darker Tone */
    fifthColor="120, 120, 120" /* Deep Gray */
    pointerColor="255, 255, 255" /* White Pointer Effect */
    size="100%"
    className="absolute inset-0 flex  z-10"
  >
    <div className=" w-[13%] border-r-3 z-20"> </div>
    <div className="w-full  bg-[rgba(255,255,255,0.4)] z-20 flex-col flex  items-center "> 
      <h1 className="text-6xl font-bold z-20 mt-10 text-transparent bg-clip-text bg-gradient-to-br from-slate-300 to-slate-500 text-opacity-20  " >Project</h1>
      <div className="mt-20 w-[80%] h-44 bg-slate-500/30 ml-10 mr-10 backdrop-blur-lg rounded-3xl"></div>
      <div className="mt-20 w-[80%] h-44 bg-slate-500/30 ml-10 mr-10 backdrop-blur-lg rounded-3xl"></div>
      <div className="mt-20 w-[80%] h-44 bg-slate-500/30 ml-10 mr-10 backdrop-blur-lg rounded-3xl"></div>
      
      


    </div>
    <div className="h-full w-[13%] border-l-3 z-20"> </div>

  </BackgroundGradientAnimation>

  
</motion.div>

  
  );
}
