"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

export default function ProfileHeader() {
  const [relationship, setRelationship] = useState("Dating");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center lg:gap-36 gap-8   py-4 rounded-lg  relative">
      <div className="flex items-center gap-4">
        <Image
          src="/Face2.png"
          alt="Profile"
          className="h-[100px] w-[100px] rounded-full object-cover"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-[12px] font-semibold mb-2">
            Welcome, Temiloluwa
          </h2>
          <p className="text-[9px] text-[#000000] font-semibold">
            My Profile Completeness
          </p>

          {/* Progress Bar */}
          <div className="relative w-48 h-2 bg-gray-300 inline-flex  rounded-full">
            <div
              className="h-2 bg-[#ef2424] rounded-full"
              style={{ width: "60%" }} // Adjust percentage dynamically if needed
            ></div>
          </div>
          <span className="text-[9px] text-gray-500 mx-2">60%</span>
        </div>
      </div>

      {/* Right Side - Relationship Type */}
      <div className="mt-4 md:mt-0 inline-flex items-center">
        <label className="text-[#000000] text-[12px] font-medium">
          Relationship Type:
        </label>
        <select
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          className="ml-2 h-[24px] text-xs px-3  border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="Dating">Dating</option>
          <option value="Married">Married</option>
          <option value="Single">Single</option>
          <option value="Complicated">Complicated</option>
        </select>
      </div>
    </div>
  );
}
