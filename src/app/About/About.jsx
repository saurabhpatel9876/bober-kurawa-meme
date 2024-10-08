import Image from 'next/image'
import React from 'react'
import bober from "@/assets/bober_with_men.webp"

const About = () => {
  return (
    <>
    <div className="bg-yellow-900 flex-col">
   <div
   className=" text-3xl mt-10 text-center text-neutral-500 max-w-4xl">
     "Bober kurwa" is a phrase that combines two Polish words: "bober," meaning "beaver," and "kurwa," a vulgar term that translates to "fk"** or "bitch." The phrase can be interpreted as a humorous or crude expression, often used in memes or internet videos, particularly those featuring people excitedly encountering beavers while using expletives.
      
   </div>
      <div>
      <Image
      src={bober}
      width={300}
      height={300}
      alt="Picture of the author"
    />
      </div>
    </div>
    </>
  )
}

export default About