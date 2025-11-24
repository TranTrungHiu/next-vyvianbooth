import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import gif3 from "@/app/assets/gif3.gif";
import gif4 from "@/app/assets/gif4.gif";
import gif5 from "@/app/assets/gif5.gif";
import gif6 from "@/app/assets/gif6.gif";

export default function Home() {
  return (
    <main className="relative space-y-8 place-self-center px-5">
      {/* Decorative GIFs */}
      <div className="absolute top-10 -left-10 hidden md:block">
        <Image
          src={gif3}
          alt=""
          width={80}
          height={80}
          className="opacity-70"
          unoptimized
        />
      </div>
      <div className="absolute top-20 -right-10 hidden md:block">
        <Image
          src={gif4}
          alt=""
          width={80}
          height={80}
          className="opacity-70"
          unoptimized
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="float-animation">
          <Image
            src={logo}
            alt="VyvianBooth Logo"
            width={250}
            height={250}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-5">
          <Button
            asChild
            className="btn-glow from-neon-pink to-coral bg-gradient-to-r px-8 py-7 text-xl font-bold uppercase shadow-lg transition-all hover:shadow-2xl w-full"
          >
            <Link href="/camera" className="w-full">
              <Camera className="animate-bounce" />
              Dùng Camera
            </Link>
          </Button>
          <Button
            asChild
            className="btn-glow from-mint to-sky bg-gradient-to-r px-8 py-7 text-xl font-bold uppercase shadow-lg transition-all hover:shadow-2xl w-full"
          >
            <Link href="/upload" className="w-full">
              <Upload className="animate-bounce" /> Tải Ảnh Lên
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom decorative GIFs */}
      <div className="flex justify-center gap-8 pt-4">
        <Image
          src={gif5}
          alt=""
          width={80}
          height={60}
          className="opacity-60"
          unoptimized
        />
        <Image
          src={gif6}
          alt=""
          width={60}
          height={60}
          className="opacity-60"
          unoptimized
        />
      </div>
    </main>
  );
}
