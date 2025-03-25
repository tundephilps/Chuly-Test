"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiFilter } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b ">
      <div className="mx-auto flex items-center justify-between">
        {/* Left Section (Logo) */}
        <div className="flex">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              className="h-full w-full"
              width={400}
              height={600}
            />
          </div>

          {/* Center Section (Search Bar & Filter - Desktop) */}
          <div className="flex items-center gap-4 lg:pl-20 pl-6">
            <div className="relative lg:flex hidden pr-4">
              <FiSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="lg:px-12 px-8 lg:pr-4  py-2 border border-[#666666] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3e7bea]"
              />
            </div>
            <button className="lg:flex hidden  items-center gap-2 px-4 py-2 border rounded-full border-[#666666] hover:bg-gray-200">
              <Image
                src="/Filter.png"
                alt="filter"
                className="h-full w-full"
                width={400}
                height={600}
              />
              Filter
            </button>
          </div>
        </div>

        {/* Right Section (Notification & User Profile) */}
        <div className="flex items-center gap-4 lg:pr-20 pr-4">
          <Image
            src="/Bell.png"
            alt="Notifications"
            className="h-6 w-6"
            height={400}
            width={600}
          />
          <Image
            src="/Face.png"
            alt="Profile"
            className="h-[50px] w-[50px] rounded-full"
            height={400}
            width={600}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-200">
            <FiFilter />
            Filter
          </button>
          <div className="flex items-center gap-4">
            <Image
              src="/Bell.png"
              alt="Notifications"
              className="h-6 w-6"
              height={400}
              width={600}
            />
            <Image
              src="/Face.png"
              alt="Profile"
              className="h-[50px] w-[50px] rounded-full"
              height={400}
              width={600}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
