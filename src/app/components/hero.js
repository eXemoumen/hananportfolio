'use client'
import Cards from "@/components/card";
import Link from "next/link";
import Nav from "./nav";
import React, { createContext } from "react";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useMotionTemplate,
} from "framer-motion";

function Hero() {
  return (
    <>
      <motion.div
        className="h-screen max-md:h[80vh] max-sm:h-[50vh]"
        {...headContainerAnimation}
      >
        <Nav />
        <motion.div
          {...headContentAnimation}
          className="flex justify-center text-center items-center"
        >
          <h1 className="text-8xl  w-3/4 mt-20 ml-10 font-mono max-md:text-4xl max-sm:text-4xl max-sm:text-left">
            Hello,I’m <span className="text-[#E67E22] ">Hanane Feriekh</span>{" "}
            <br />
            and <br /> I’m a{" "}
            <span className="text-[#E67E22] ">UI/ UX designer.</span>
          </h1>
        </motion.div>
      </motion.div>
      <motion.section
        {...headTextAnimation}
        id="about"
        className=" mt-16 h-screen  flex flex-col items-center gap-8 capitalize font-mono max-sm:h-full "
      >
        <h1 className="font-bold text-7xl  flex justify-center my-10 max-md:text-4xl max-sm:text-4xl ">
          about me
        </h1>
        <p className="text-4xl w-4/6 font-mono text-center max-sm:text-xl max-sm:w-[90vw] max-sm:h-full">
          I’m a passionate UI/UX designer ,I blend{" "}
          <span className="text-[#E67E22] ">creativity and responsibility</span>{" "}
          to craft elegant digital experiences.I prioritize clear communication
          , reliability and delivering results that exceed expectations,ensuring
          you can trust my commitment to your project’s creativity and
          responsibility <br />
          <span className="text-[#19682a] text-6xl max-sm:text-2xl">
            success.
          </span>{" "}
        </p>
      </motion.section>
      <motion.section id="work" className="" {...slideAnimation("left")}>
        <Cards></Cards>
      </motion.section>

      <motion.section
        {...headTextAnimation}  
        id="contact"
        class="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div class="container max-w-3xl px-4 md:px-6">
          <div class="space-y-6 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p class="text-muted-foreground md:text-xl">
              I’d love to hear from you! Fill out the form below and I’ll get
              back to you as soon as possible.
            </p>
          </div>
          <form class="mt-12 space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="message"
              >
                Message
              </label>
              <textarea
                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="message"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            <div class="flex justify-center">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full max-w-[200px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
}
export default Hero;
