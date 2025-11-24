"use client";

import gif1 from "@/app/assets/gif1.gif";
import gif2 from "@/app/assets/gif2.gif";
import gif3 from "@/app/assets/gif3.gif";
import Image from "next/image";
import { useImagesStore } from "@/providers/images-store-provider";

export const AxolotlStickers = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <Image src={gif1} alt="" className="absolute top-4 w-16" unoptimized />
      <Image src={gif2} alt="" className="absolute top-20 right-6 w-16" unoptimized />
      {!isLessThanTwoImages && (
        <Image src={gif3} alt="" className="absolute top-80 left-6 w-16" unoptimized />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={gif1}
          alt=""
          className="absolute bottom-36 left-6 w-16"
          unoptimized
        />
      )}
      <Image
        src={gif2}
        alt=""
        className="absolute right-6 bottom-18 w-16"
        unoptimized
      />
    </div>
  );
};
