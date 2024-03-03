"use client"

import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeAwareLanding: React.FC = () => {
  const { theme } = useTheme();

  // Define image sources for light and dark themes
  const lightImageSrc: string = "/landing-light.svg";
  const darkImageSrc: string = "/landing-dark.svg";

  // Determine the image source based on the current theme
  const imageSrc: string = theme === "light" ? lightImageSrc : darkImageSrc;

  return (
    <div>
      <Image
        src={imageSrc}
        alt="Cityscape illustration, buildings are connected"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ThemeAwareLanding;
