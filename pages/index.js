import Head from "next/head";
import "tailwindcss/tailwind.css";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import Contact from "./Components/contact";
import Navbar from "./Components/navbar";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className=" min-w-full ">
      <Head>
        <title>AI Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center items-center min-w-full">
        <div className="grid grid-flow-col grid-cols-2 gap-3 p-20 max-w-4xl">
          <div>
            <h1 className="text-5xl font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-red-600">
              Get advice for your business idea!
            </h1>
            <p className="text-sm self-center pb-7">
              Enter your idea below and hit submit:
            </p>
            <Contact />
          </div>
          <div className="rounded-md overflow-hidden border-2 border-red-300 bg-black ">
            <ReactPlayer
              url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              playing={isPlaying}
              muted={true}
              controls={true}
              width={"100%"}
              height={"100%"}
              loop={true}
              className=""
            />
          </div>
        </div>
      </main>

      <footer className="min-w-full flex justify-center border-t-2 items-center text-gray-500 text-center text-xs p-10">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className=" "
        >
          Powered by
          <img
            src="/Ellipse 1.svg"
            alt="Vercel Logo"
            className=" w-10 self-center"
          />
        </a>
      </footer>
    </div>
  );
}
