"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import gif1 from "@/app/assets/gif1.gif";
import gif4 from "@/app/assets/gif4.gif";
import gif8 from "@/app/assets/gif8.gif";
import { useFiltersStore } from "@/providers/filters-store-provider";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";

export const PhotostripStickers = () => {
  const { stickers, setStickers } = useFiltersStore((store) => store);

  return (
    <div className="grid grid-cols-4">
      <Button
        onClick={() => setStickers("axolotl")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "axolotl" && "border-2 border-[#72b86d]",
        )}
      >
        <Image src={gif1} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 1</span>
      </Button>
      <Button
        onClick={() => setStickers("cat")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "cat" && "border-2 border-[#72b86d]",
        )}
      >
        <Image src={gif4} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 2</span>
      </Button>
      <Button
        onClick={() => setStickers("panda")}
        variant="ghost"
        className={cn(
          "h-auto",
          stickers === "panda" && "border-2 border-[#72b86d]",
        )}
      >
        <Image src={gif8} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 3</span>
      </Button>
      <Button
        onClick={() => setStickers(null)}
        variant="ghost"
        className={cn(
          "h-full w-full",
          !stickers && "border-2 border-[#72b86d]",
        )}
      >
        <Trash />
      </Button>
    </div>
  );
};
