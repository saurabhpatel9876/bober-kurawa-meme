"use client"


import Image from "next/image";
import Link from "next/link";
import bg from "@/assets/header.webp"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 bg-yellow-900 text-white">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {/* VirtualR build tools */}
        Welcome to Bober Kurwa $BOBER
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          {/* for developers */}
          The most famous beaver in Poland
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        {/* Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality! */}
      </p>
<span>
  <p className="text-2xl m-3 p-2">
    CA- 6bDbbx8ptD7WSV6b21PQcoDtPguHYptmYLs81v9rmSnD
  </p>
</span>
      

      
      <Image
      src={bg}
      width={500}
      height={500}
      alt="Picture of the author"
    />
      

      <div className="flex justify-center my-10">
        <div
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          <Link href="https://www.youtube.com/watch?v=xdfM0NLHPV0">bober kurawa song</Link>

        </div>
        {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}

<div
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          <Link href="https://dexscreener.com/solana/95ssdi62jzqr2wvv54mrr19ht3m8ofoc23krjy67egca">Chart</Link>

        </div>

        <div
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          <Link href="https://t.me/+-tT9PJXsuuM2NDdi">Telegram</Link>

        </div>

        <div
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          <Link href="https://x.com/Boberonsol69">X</Link>

        </div>


      
      </div>
      <div className="flex mt-10 justify-center">


        
      

        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default HeroSection;
