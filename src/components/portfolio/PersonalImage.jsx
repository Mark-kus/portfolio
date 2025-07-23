"use client";

import React, { memo } from "react";
import Image from "next/image";
import markkusDark from "@/assets/markkus-dark.webp";
// import markkusLight from "@/assets/markkus-light.webp"; // TODO: Get a better image
// import { useDarkMode } from "@/context/DarkModeContext";

const PersonalImage = memo(() => {
  // const { isDarkMode } = useDarkMode();
  return (
    <div className="w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg relative">
      <Image
        src={markkusDark}
        alt="Image of Marco Tignanelli"
        className="w-full h-full object-cover"
        width={320}
        height={320}
        sizes="(max-width: 640px) 80vw, 320px"
        priority
        quality={85} // Reduce quality slightly for better performance
      />
    </div>
  );
});

PersonalImage.displayName = 'PersonalImage';

export default PersonalImage;
