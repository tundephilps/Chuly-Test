import React from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

const hobbies = [
  { name: "Laying on the Beach", color: "bg-[#75f94c]", icon: "/Hobbies1.png" },
  { name: "Biking", color: "bg-[#BC1B1B]", icon: "/Hobbies2.png" },
  { name: "Cooking", color: "bg-[#F6E123]", icon: "/Hobbies3.png" },
  { name: "Dancing", color: "bg-[#9747FF]", icon: "/Hobbies4.png" },
  { name: "Museums & Arts", color: "bg-[#2DE9F5]", icon: "/Hobbies5.png" },
];

const HobbiesSection = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white w-full ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[12px] font-bold">My Hobbies</h2>
        <Image
          src="/Edit.png"
          className="h-4 w-4 cursor-pointer"
          width={100}
          height={100}
        />
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-4 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${hobby.color}`}
            >
              <Image src={hobby.icon} alt={hobby.name} width={30} height={30} />
            </div>
            <p className="text-xs mt-1 font-medium">{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesSection;
