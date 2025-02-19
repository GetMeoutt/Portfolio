

"use client";

import exp from "constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpOutlined } from "@ant-design/icons";

export default function CardL({ img, title, description }: { img: string; title: string; description: string }) {
    return (
        <motion.div
        className="group w-[80%] h-60 bg-transparent ml-10 mr-10 backdrop-blur-lg rounded-3xl border-neutral-800 border-2 hover:border-neutral-600 ease-in-out duration-300 flex items-center justify-start p-10"
        initial={{ opacity: 1, x: "85vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "linear", delay: 0.5, type: "tween" }}
        viewport={{ once: true, amount: 0 }}
      >
        <Image
          src={img}
          alt="project picture"
          width={320}
          height={144}
          className="rounded-lg w-80 h-36 object-cover flex-shrink-0"
        />
        <ArrowUpOutlined className=" text-3xl absolute  text-indigo-400 top-0 right-0 rotate-45 mt-5 mr-5 group-hover:text-indigo-200 group-hover:mt-0 group-hover:mr-0 ease-in-out duration-300 hover:bg-neutral-900/10"  />
        <div className=" relative flex flex-col items-start ml-10 justify-start  ">
            
          <div className="title">
            <h3 className="text-2xl font-semibold ">{title}</h3>
          </div>
          <div>
            <p className="text-sm font-extralight">
              {" "}
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
}
