"use client";

import profile from "@/assets/profile.png";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="gap-32 my-20 grid xl:grid-cols-2">
      <div className="">
        <p className="font-normal text-2xl my-3">HELLO THERE!</p>
        <h1 className="font-semibold text-6xl mt-10">
          Hi, I am
          <br />
          <span className="text-teal-500">Ashikul Islam Nayeem</span>
        </h1>
        <h2 className="my-3 text-5xl text-teal-500 mb-10">
          a
          <span className="dark:text-white text-black">
            <Typewriter
              words={[" Programmer", " Frontend Developer", " Software Engineer"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="font-normal text-xl my-3 dark:text-[#d3d3d3]">
          With a great passion for the technological world, both Frontend and Backend, pursuing new challenges and continually exploring new trends.
        </p>
        <p className="uppercase mt-10">find me here</p>
        <div className="flex gap-4 my-5">
          <Link
            href="https://github.com/ainayeem"
            className="p-6 rounded-lg shadow-md shadow-gray-200 dark:shadow-[#37383b] hover:scale-105 transition-transform duration-300"
          >
            <Github />
          </Link>
          <Link
            href="https://linkedin.com/in/ainayeem"
            className="p-6 rounded-lg shadow-md shadow-gray-200 dark:shadow-[#37383b] hover:scale-105 transition-transform duration-300"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61560522810852"
            className="p-6 rounded-lg shadow-md shadow-gray-200 dark:shadow-[#37383b] hover:scale-105 transition-transform duration-300"
          >
            <Facebook />
          </Link>
        </div>
        <Button asChild>
          <Link href="https://drive.google.com/uc?export=download&id=1_3702RkHJtWp_hgCY7tI7maWtTqi2sZg" download>
            Download CV
          </Link>
        </Button>
      </div>
      <div className="m-auto">
        <Image className="border-2 border-teal-500 rounded-md shadow-lg" src={profile} width={300} height={300} alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
