import Link from "next/link";
import Image from "next/image";
import gif7 from "@/app/assets/gif7.gif";
import gif8 from "@/app/assets/gif8.gif";

export const Footer = () => {
  return (
    <footer className="glass-effect mx-auto p-5">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={gif7}
            alt=""
            width={40}
            height={40}
            className="opacity-70"
            unoptimized
          />
          <p className="text-center text-base text-gray-600">
            Made with <span className="text-red-500">♥</span> by{" "}
            <Link
              href="https://github.com/TranTrungHiu"
              target="_blank"
              className="font-semibold text-gray-800 transition-colors hover:text-pink-600"
            >
              Tran Trung Hieu
            </Link>
          </p>
          <Image
            src={gif8}
            alt=""
            width={40}
            height={40}
            className="opacity-70"
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
};
