"use client";

import React from "react";
import Image from "next/image";
import markkusDark from "@/assets/markkus-dark.webp";
import markkusLight from "@/assets/markkus-light.webp"; // TODO: Get a better image
import { useDarkMode } from "@/context/DarkModeContext";

const PersonalImage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg relative">
      <Image
        loading="eager"
        src={markkusDark}
        alt="Image of Marco Tignanelli"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
        width={320}
        height={320}
        sizes="(max-width: 640px) 80vw, 320px"
        priority
      />
      {/* <Image
        loading="eager"
        src={markkusDark}
        alt="Image of Marco Tignanelli"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isDarkMode ? "opacity-0" : "opacity-100 delay-100"
        }`}
        width={320}
        height={320}
        sizes="(max-width: 640px) 80vw, 320px"
        priority
      /> */}
    </div>
  );
};

export default PersonalImage;
