"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EmojiButton = ({
  src,
  alt,
  genre,
}: {
  src: string;
  alt: string;
  genre: number;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Button
      onClick={() => router.push(`/genre/${genre}`)}
      type="button"
      className="!bg-white shadow-lg hover:border-red-500 border cursor-pointer"
      style={{ padding: "4rem 1.5rem" }}
    >
      <div className="relative w-[7rem] h-[6rem]">
        {loading && !error && (
          <Skeleton
            className="absolute top-0 left-0 w-full h-full"
            borderRadius={12}
          />
        )}

        {!error ? (
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className={`object-contain transition-opacity duration-300 w-[7rem] h-[6rem] ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            ❌
          </div>
        )}
      </div>
    </Button>
  );
};

export default EmojiButton;
