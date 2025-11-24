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
    <div className="grid grid-cols-4 gap-2">
      <Button
        onClick={() => setStickers("axolotl")}
        variant="ghost"
        className={cn(
          "h-auto border-2 p-2",
          stickers === "axolotl" ? "border-[#72b86d]" : "border-transparent",
        )}
      >
        <Image src={gif1} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 1</span>
      </Button>
      <Button
        onClick={() => setStickers("cat")}
        variant="ghost"
        className={cn(
          "h-auto border-2 p-2",
          stickers === "cat" ? "border-[#72b86d]" : "border-transparent",
        )}
      >
        <Image src={gif4} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 2</span>
      </Button>
      <Button
        onClick={() => setStickers("panda")}
        variant="ghost"
        className={cn(
          "h-auto border-2 p-2",
          stickers === "panda" ? "border-[#72b86d]" : "border-transparent",
        )}
      >
        <Image src={gif8} alt="" className="w-12" unoptimized />
        <span className="sr-only">Sticker Set 3</span>
      </Button>
      <Button
        onClick={() => setStickers(null)}
        variant="ghost"
        className={cn(
          "h-full w-full border-2 p-2",
          !stickers ? "border-[#72b86d]" : "border-transparent",
        )}
      >
        <Trash />
      </Button>
    </div>
  );
};
