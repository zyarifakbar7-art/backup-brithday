import type { Metadata } from "next";
import { Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

const cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: "400",
  });

export const metadata: Metadata = {
  title: "Happy Birthday Kisaaa🎉🎂🥳",
  description: "A special Brithday gift for Kisaa 🎂",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cherry.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
