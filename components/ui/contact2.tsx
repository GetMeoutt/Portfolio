import emailjs from "@emailjs/browser";
import React from "react";

export default function Contact2() {
  const [submitted, setSubmitted] = React.useState(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_y0fiz7f",
      "template_nxlgptu",
      e.target,
      "9tMOCejE9zPySMD-g"
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center z-30">
        <h2 className=" text-8xl font-semibold font-mono text-[rgb(138,137,131)] mb-7">
        LET'S WORK TOGETHER
        </h2>
        <form
          onSubmit={sendEmail}
          className="text-white flex flex-col mt-10 p-4 mb-40 rounded-md gap-2"
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email_from"
            id="email"
            className="text-white bg-zinc-800 mt-3 p-2 px-4 rounded-xl pr-4"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows={10} // You can adjust the default height
            className="text-white w-[30vw] bg-zinc-800 mt-3 p-2 px-4 rounded-xl resize-none"
          ></textarea>

          <button className="mt-8 bg-indigo-500 hover:bg-indigo-400 ease-in-out text-white py-2 px-4 rounded-lg">
           send me a message
          </button>
        </form>
      </div>
    </div>
  );
}
