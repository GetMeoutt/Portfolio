import { send } from "process";
import React from "react";
import  emailjs  from "@emailjs/browser";
import {Form} from "@heroui/form";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import { BackgroundBeams } from "./background-beams";
export  const Contact = () => {
    const [submitted, setSubmitted] = React.useState(null);
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm("service_y0fiz7f","template_nxlgptu",e.target,"9tMOCejE9zPySMD-g")

    }
    return (
      <div className="bg-slate-950 ">
              <div
                id="contact"
                className=" h-screen w-screen rounded-md bg-gradient-to-b from-slate-950 to-slate-800 relative flex flex-col items-center justify-center antialiased"
              >
    <div className="flex flex-col items-center z-30">
         <h2 className="text-5xl font-semibold mt-10 text-zinc-400 tracking-tight text-transparent md:text-5xl shadow-md bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text"> Contact Me</h2>   
         <form onSubmit={sendEmail} className=" text-white flex flex-col mt-10  p-4 mb-64 rounded-md">
            <label htmlFor="email"> Email </label>
            <input type="text" name="email_from" id="email" className="email text-white bg-zinc-800 mt-3 p-2 px-4 rounded-xl pr-4 "></input>
            <label htmlFor="message"> message: </label>
            <input type="text" name="message" id="message" className="messagetext-white bg-zinc-800 mt-3 p-2 px-4 rounded-xl pr-4 pb-20"></input>
            <button className="mt-5 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Connect now!
        </span>
      </button>
        </form> 
            {/* <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={sendEmail}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        className="text-white"
        
      />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-white">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form> */}
    </div>
    <BackgroundBeams className="" />
        </div>
      </div>
    );
};