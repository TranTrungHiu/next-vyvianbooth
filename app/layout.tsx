import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImagesStoreProvider } from "@/providers/images-store-provider";
import { FiltersStoreProvider } from "@/providers/filters-store-provider";
import iconImage from "./assets/icon.png";

const cupidDarling = localFont({
  src: "./fonts/DFVN Bagel Fat One.ttf",
  variable: "--font-cupid",
  display: "swap",
  weight: "400",
});

const svnClaytonia = localFont({
  src: "./fonts/SVN-Claytonia.ttf",
  variable: "--font-claytonia",
  display: "swap",
  weight: "400",
});

const websiteUrl = "https://bubblybooth.vercel.app";
const imageUrl = "./public/vyvianbooth.png";

export const metadata: Metadata = {
  title: "VyvianBooth",
  description:
    "Bước vào thế giới quyến rũ cổ điển và những kỷ niệm vui vẻ! ✨ Vyvian Booth là trải nghiệm photobooth tuyệt vời của bạn, nơi mỗi khoảnh khắc tràn ngập niềm vui, tiếng cười và một chút ma thuật hoài cổ. Dù bạn đang ăn mừng một dịp đặc biệt hay chỉ đang ghi lại những khoảnh khắc vui vẻ với bạn bè, các bộ lọc thẩm mỹ có thể tùy chỉnh của chúng tôi mang đến sức sống cho ảnh của bạn với phong cách hoài niệm hiện đại. 📷 Chụp. Cười. Tỏa sáng. Hãy cùng tạo nên những kỷ niệm mãi mãi—từng khoảnh khắc!",
  metadataBase: new URL(websiteUrl),
  icons: {
    icon: iconImage.src,
    apple: iconImage.src,
  },
  openGraph: {
    type: "website",
    url: websiteUrl,
    title: "VyvianBooth - Photobooth Hoài Niệm",
    siteName: "VyvianBooth",
    description:
      "Bước vào thế giới quyến rũ cổ điển và những kỷ niệm vui vẻ! ✨ Vyvian Booth là trải nghiệm photobooth tuyệt vời của bạn, nơi mỗi khoảnh khắc tràn ngập niềm vui, tiếng cười và một chút ma thuật hoài cổ. Dù bạn đang ăn mừng một dịp đặc biệt hay chỉ đang ghi lại những khoảnh khắc vui vẻ với bạn bè, các bộ lọc thẩm mỹ có thể tùy chỉnh của chúng tôi mang đến sức sống cho ảnh của bạn với phong cách hoài niệm hiện đại. 📷 Chụp. Cười. Tỏa sáng. Hãy cùng tạo nên những kỷ niệm mãi mãi—từng khoảnh khắc!",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "VyvianBooth - Photobooth Hoài Niệm",
      },
    ],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "VyvianBooth - Photobooth Hoài Niệm",
    description:
      "Bước vào thế giới quyến rũ cổ điển và những kỷ niệm vui vẻ! ✨ Vyvian Booth là trải nghiệm photobooth tuyệt vời của bạn, nơi mỗi khoảnh khắc tràn ngập niềm vui, tiếng cười và một chút ma thuật hoài cổ. 📷 Chụp. Cười. Tỏa sáng. Hãy cùng tạo nên những kỷ niệm mãi mãi—từng khoảnh khắc!",
    images: [imageUrl],
  },
  keywords: [
    "photobooth",
    "chụp ảnh",
    "hoài niệm",
    "vintage",
    "retro",
    "bộ lọc",
    "kỷ niệm",
    "nhiếp ảnh",
    "máy ảnh",
    "ảnh đẹp",
    "khoảnh khắc",
    "lễ kỷ niệm",
    "bạn bè",
    "gia đình",
    "niềm vui",
    "tiếng cười",
    "thẩm mỹ",
    "hiện đại",
    "Vyvian Booth",
    "chụp hình",
  ],
  authors: [
    {
      name: "Briuwu",
      url: "https://brianmillonte.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${cupidDarling.variable} ${svnClaytonia.variable} font-claytonia grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Header />
        <FiltersStoreProvider>
          <ImagesStoreProvider>{children}</ImagesStoreProvider>
        </FiltersStoreProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
