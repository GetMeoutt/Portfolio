import { motion } from "framer-motion";

export default function Skills() {

    return (
        <div className="relative w-full bg-neutral-900 text-gray-400 p-10 flex justify-center items-center flex-col ">
        <h2 className="text-2xl font-semibold ">Skills</h2>
        <div className="overflow-hidden w-full ">
          <motion.div
            className="flex space-x-4 mt-5 items-center"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[
              "img/js-logo.png",
              "img/python-logo.png",
              "img/linux-logo.png",
              "img/mysql-logo.png",
              "img/hyperv-logo.png",
              "img/nodejs-logo.png",
              "img/react-logo.png",
              "img/flask-logo.png",
              "img/express-logo.png",
            ].map((item) => (
              <div key={item} className=" text-white p-4 rounded-lg w-48">
                <img src={item}></img>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    )
}