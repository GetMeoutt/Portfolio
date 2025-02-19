"use client";
import { motion } from "framer-motion";
import { MailOutlined } from "@ant-design/icons";

export default function Navbar() {
    


  return (
  <motion.nav
    className="w-1/2 fixed top-0 left-1/2 bg-neutral-900 p-4 shadow-xl shadow-gray-700 hover:shadow-gray-400 z-50 mt-6 rounded-3xl flex items-center text-slate-600 hover:text-slate-400 ease-in-out duration-300"
    initial={{ opacity: 0, y: -50, x: "-50%" }} // Ensures correct positioning on load
    animate={{ opacity: 1, y: 0, x: "-50%" }} // Keeps it centered after animation
    transition={{ duration: 0.5 }}
  >
    <a href="#contact " className="flex items-center">
      <button className="p-1 text-white rounded-lg bg-zinc-800 m-0 mr-2">
        <MailOutlined style={{ color: "gray" }} />
      </button>
      <p>noppanatsri@gmail.com</p>
    </a>
    <div className="ml-auto flex gap-2 ">
      <a
        className=" hover:text-slate-200"
        href="https://www.linkedin.com/in/noppanat/"
        target="_blank"
      >
        Linkedin
      </a>
      <p> / </p>
      <a
        className=" hover:text-slate-200"
        href="https://github.com/GetMeoutt"
        target="_blank"
      >
        Github
      </a>
      <p> / </p>
      <a className=" hover:text-slate-200" href="">
        {" "}
        Instagram
      </a>
    </div>
  </motion.nav>
  )
}
