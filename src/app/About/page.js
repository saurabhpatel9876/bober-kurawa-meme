import React from 'react'
import bober from "@/assets/bober_with_men.webp";
import Image from 'next/image';
const page = () => {
  return (
    <>
   <div className="flex-col">
   <p className="m-3 p-2 font-extrabold text-2xl">
    "Bober Kurwa" is a meme that gained popularity in Poland, often used humorously to express frustration, surprise, or confusion. "Bober" refers to a beaver, while "kurwa" is a Polish expletive commonly used in a variety of situations. The meme became famous as it reflects everyday Polish expressions and emotions, particularly when things go wrong or are unexpected. It’s part of a trend where animals are used in humorous contexts with Polish slang, making it relatable and funny to many Poles.
    </p>

    <Image
      src={bober}
      width={300}
      height={300}
      alt="Picture of the author"
    />
   </div>
    </>
  )
}

export default page