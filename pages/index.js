import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-44 max-w-7xl">
        <div className="grid grid-flow-col grid-cols-2 gap-3">
          <div>
            <h1 className="text-5xl font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-red-600">
              Get advice for your business idea!
            </h1>

            <p className="text-sm self-center pb-7">
              Enter your idea below and hit submit:
            </p>
          </div>
          <div className="rounded-md overflow-hidden border-2 border-red-300 ">
            <ReactPlayer
              url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              playing={isPlaying}
              muted={true}
              controls={true}
            />
          </div>
        </div>
      </main>

      <footer className="min-w-full flex justify-center px-44 border-t-2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
