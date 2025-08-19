import Image from "next/image";
import markkusDark from "@/assets/markkus-dark.webp";

const PersonalImage = () => {
  return (
    <div className="relative h-80 w-80 overflow-hidden rounded-full shadow-lg lg:h-80 lg:w-80">
      <Image
        src={markkusDark}
        alt="Image of Marco Tignanelli"
        className="h-full w-full object-cover"
        width={320}
        height={320}
        sizes="(max-width: 640px) 80vw, 320px"
        priority
        quality={50}
      />
    </div>
  );
};

export default PersonalImage;
