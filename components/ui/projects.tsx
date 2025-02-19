
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { TracingBeam } from "./tracing-beam";


export default function Projects() {
    const project_content = [
        {
          title: "Language Learning App Unoligo",
          description: (
            <>
              <p>
                "A language learning app that allows users to practice their
                language skills and learn new words. In this project I was charge as
                a Frontend developer. I made the UI/UX design and implemented the
                functionality. Including the responsive design and user
                interactions. Using framework of flask, nodejs HTML and JS.",
              </p>
            </>
          ),
          image: "/img/unolingo-project.png",
        },
        {
          title: "Discord reminer bot",
          description: (
            <>
              <p>
                "A personal perject that I made using discord API and node.js to
                allows users to set a reminder for a specific time and date. The bot
                will send a message to the user when the time is up. Using framework
                of discord.js, nodejs HTML and JS.",
              </p>
            </>
          ),
          image: "/img/discord_project.png",
        },
        {
          title: "Cypress Hills partner scorecard",
          description: (
            <>
              <p>
                "A academic project that I and my team made for a client. In this
                project we design the scorecard function in the Cypress Hills
                website. Using framework of react, GraphQL, TailwindCSS and
                Typescript . I was roled as a Frontend developer. I made the UI/UX
                design and implemented the functionality using components library
                like antd."
              </p>
            </>
          ),
          image: "/img/cypresshill-project.png",
        },
      ];
    return (
        <>
        <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Projects
        </motion.h1>
      </LampContainer>
      <div className="bg-slate-950 z-30 h-full overflow-hidden">
        <TracingBeam className="px-6 z-40">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
            {project_content.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <p className={"text-xl mb-4 text-zinc-300"}>{item.title}</p>

                <div className="text-sm text-zinc-200 prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
      </>
    )
}