"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="bg-[#f6f6f6] relative min-h-screen lg:px-32 px-2 py-8">
          <IoIosMenu
            className="absolute lg:top-12 top-2 text-2xl text-black left-8 cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="absolute z-50 ">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
