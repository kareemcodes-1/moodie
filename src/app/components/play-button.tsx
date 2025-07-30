'use client';

import React from 'react';

const PlayButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-400 hover:bg-red-500 text-white font-medium px-[1.5rem] py-[.7rem] rounded-lg flex items-center gap-2 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
      Play Trailer
    </button>
  );
};

export default PlayButton;
