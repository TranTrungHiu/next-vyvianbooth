import Link from "next/link";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Instagram } from "lucide-react";
import Image from "next/image";

import logo from "@/app/assets/logo.png";
import gif1 from "@/app/assets/gif1.gif";
import gif2 from "@/app/assets/gif2.gif";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
      <Link href="/" className="transition-transform hover:scale-105">
        <Image
          src={logo}
          alt="VyvianBooth Logo"
          width={80}
          height={120}
          className="h-auto w-30 object-contain"
        />
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 transition-all hover:bg-gray-50"
          >
            Giới thiệu
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md rounded-lg border bg-white shadow-xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-center text-2xl font-bold text-gray-800">
              Vyvian Booth
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-6">
            <div className="flex items-center justify-center gap-4">
              <Image src={gif1} alt="" width={60} height={60} className="rounded-lg" unoptimized />
              <Image src={gif2} alt="" width={60} height={60} className="rounded-lg" unoptimized />
            </div>
            
            <p className="text-center text-base leading-relaxed text-gray-600">
              Trải nghiệm chụp ảnh photobooth với phong cách cổ điển và những khoảnh khắc vui vẻ! 
              Ghi lại những giây phút đáng nhớ với bộ lọc thẩm mỹ có thể tùy chỉnh.
            </p>
          </div>

          <DialogFooter className="border-t pt-4">
            <div className="flex w-full items-center justify-center gap-6">
              <Link
                href="https://www.instagram.com/trantrunghjeu"
                target="_blank"
                className="text-gray-600 transition-all hover:scale-110 hover:text-pink-600"
                title="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/TranTrungHiu"
                target="_blank"
                className="text-gray-600 transition-all hover:scale-110 hover:text-gray-900"
                title="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
