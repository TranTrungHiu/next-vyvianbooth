"use client";

import { useImagesStore } from "@/providers/images-store-provider";
import gif8 from "@/app/assets/gif8.gif";
import gif9 from "@/app/assets/gif9.gif";
import gif10 from "@/app/assets/gif10.gif";

import Image from "next/image";

export const PandaStickers = () => {
  const { images } = useImagesStore((store) => store);

  const isLessThanTwoImages = images.length < 2;
  const isLessThanThreeImages = images.length < 3;
  return (
    <div>
      <Image src={gif8} alt="" className="absolute top-4 w-16" unoptimized />
      <Image
        src={gif9}
        alt=""
        className="absolute top-20 right-6 w-16"
        unoptimized
      />
      {!isLessThanTwoImages && (
        <Image
          src={gif10}
          alt=""
          className="absolute top-80 left-6 w-16"
          unoptimized
        />
      )}
      {!isLessThanThreeImages && (
        <Image
          src={gif8}
          alt=""
          className="absolute bottom-36 left-6 w-16"
          unoptimized
        />
      )}
      <Image
        src={gif9}
        alt=""
        className="absolute right-6 bottom-18 w-16"
        unoptimized
      />
    </div>
  );
};
