"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Image from "next/image";

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
              <Button
                onClick={() => handleGenre(35)}
                type="button"
                className="text-[5rem] cursor-pointer !bg-white shadow-lg hover:border-red-500 border"
                style={{ padding: "4rem 1.5rem" }}
              >
                <Image
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.gif"
                  className="w-[7rem] h-[6rem] object-contain"
                  width={500}
                  height={500}
                  alt=""
                />
              </Button>

              <Button
                onClick={() => handleGenre(18)}
                type="button"
                className="text-[5rem] cursor-pointer !bg-white shadow-lg hover:border-red-500 border"
                style={{ padding: "4rem 1.5rem" }}
              >
                <Image
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif"
                  className="w-[7rem] h-[6rem] object-contain"
                  width={500}
                  height={500}
                  alt=""
                />
              </Button>

              <Button
                onClick={() => handleGenre(28)}
                type="button"
                className="text-[5rem] cursor-pointer !bg-white shadow-lg hover:border-red-500 border"
                style={{ padding: "4rem 1.5rem" }}
              >
                <Image
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.gif"
                  className="w-[7rem] h-[6rem] object-contain"
                  width={500}
                  height={500}
                  alt=""
                />
              </Button>

              <Button
                onClick={() => handleGenre(10749)}
                type="button"
                className="text-[5rem] cursor-pointer !bg-white shadow-lg hover:border-red-500 border"
                style={{ padding: "4rem 1.5rem" }}
              >
                <Image
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif"
                  className="w-[7rem] h-[6rem] object-contain"
                  width={500}
                  height={500}
                  alt=""
                />
              </Button>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
