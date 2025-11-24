"use client";

import { useImagesStore } from "@/providers/images-store-provider";
import gif4 from "@/app/assets/gif4.gif";
import gif5 from "@/app/assets/gif5.gif";
import gif6 from "@/app/assets/gif6.gif";
import gif7 from "@/app/assets/gif7.gif";

import Image from "next/image";

export const CatStickers = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <Image src={gif4} alt="" className="absolute top-4 w-16" unoptimized />
      <Image
        src={gif5}
        alt=""
        className="absolute top-20 right-6 w-16"
        unoptimized
      />
      {!isLessThanTwoImages && (
        <Image
          src={gif6}
          alt=""
          className="absolute top-80 left-6 w-16"
          unoptimized
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={gif7}
          alt=""
          className="absolute bottom-36 left-6 w-16"
          unoptimized
        />
      )}
      <Image
        src={gif4}
        alt=""
        className="absolute right-6 bottom-18 w-16"
        unoptimized
      />
    </div>
  );
};
