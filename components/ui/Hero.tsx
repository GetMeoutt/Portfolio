
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { ArrowDownOutlined } from "@ant-design/icons";

export default function Hero() {




    return (
        <div className="relative h-screen w-full">
        <BackgroundGradientAnimation
         gradientBackgroundStart="rgb(20, 19, 17)" // Night (#141311) - Dark Background
         gradientBackgroundEnd="rgb(20, 19, 17)"   // Night (#141311) - Uniform
         firstColor="24, 26, 31"                  // #181A1F (Dark gray-blue)
         secondColor="44, 48, 56"                 // #2C3038 (Slate gray-blue)
         thirdColor="64, 69, 82"                  // #404552 (Muted steel-blue)
         fourthColor="90, 95, 114"                // #5A5F72 (Blue-leaning gray)
         fifthColor="124, 133, 149"               // #7C8595 (Soft, cool gray)
         
          size="100%"
          className="absolute inset-0 flex justify-center items-center flex-col z-10"
        >
          <div className="flex justify-center flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden z-40 -mt-4">
              <img
                src={"img/profile-Photoroom.png"}
                alt={"Tom profile picture"}
                className="w-full h-full object-cover object-top translate-y-1"
              />
            </div>

            <div className="text-white mt-5 flex p">
              Hi, I'm Tom Sripan{" "}
              <motion.p
                className=""
                initial={{ rotate: 0 }}
                animate={{ rotate: 80 }}
                transition={{
                  duration: .5, 
                  repeat: 9, 
                  repeatType: "reverse", 
                  ease: "easeInOut",
                  
                }}
              >
                👋
              </motion.p>
            </div>
            <div className="mt-11"></div>
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-zinc-400 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
              >
                I'm a student at BCIT with a passion for <br></br>
                <Highlight className="text-black dark:text-white">
                  scripting, networking, full-stack development.
                </Highlight>
              </motion.h1>
            </HeroHighlight>
          </div>
          <div className="absolute bottom-0 mb-10 flex justify-center">
            <ArrowDownOutlined
              style={{ color: "white" }}
              className="animate-bounce"
            />
          </div>
        </BackgroundGradientAnimation>
      </div>
    )
}