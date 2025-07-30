"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import EmojiButton from "./emoji-button";

const Hero = () => {
  const router = useRouter();

  function handleGenre(genre: number) {
    router.push(`/genre/${genre}`);
  }

  return (
    <section className="h-[95vh] w-full flex items-center justify-center my-auto">
      <div className="flex items-center flex-col  gap-[4rem]">
        <h1 className="lg:text-[4rem] text-[2.5rem] text-center text-red-500">
          How are you feeling today?
        </h1>

        {/* Wrapper with fixed width */}
        <div className="lg:w-[700px] w-[300px] overflow-hidden">
          <Marquee speed={40} gradient={false} className="w-full">
            <div className="flex gap-[1rem]">
              <EmojiButton
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.gif"
                alt="laughing"
                genre={35}
              />
              <EmojiButton
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif"
                alt="crying"
                genre={18}
              />
              <EmojiButton
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.gif"
                alt="neutral"
                genre={28}
              />
              <EmojiButton
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif"
                alt="love"
                genre={10749}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
