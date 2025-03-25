import React from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

const intrests = [
  { name: "Travel", color: "bg-[#1B34BC]", icon: "/Intrest1.png" },
  { name: "Drawng", color: "bg-[#F62FD6]", icon: "/Intrest2.png" },
  { name: "History", color: "bg-[#EF2424]", icon: "/Intrest3.png" },
  { name: "Woodworking", color: "bg-[#13E234]", icon: "/Intrest4.png" },
  { name: "Photography", color: "bg-[#F6E123]", icon: "/Intrest5.png" },
  { name: "Poetry", color: "bg-[#0C827B]", icon: "/Intrest6.png" },
  { name: "knitting", color: "bg-[#2E275C]", icon: "/Intrest7.png" },
];

const MyIntrests = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white w-full h-[400px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[12px] font-bold">My Intrests</h2>
        <Image
          src="/Edit.png"
          className="h-4 w-4 cursor-pointer"
          width={100}
          height={100}
        />
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-4 gap-4">
        {intrests.map((hobby, index) => (
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

export default MyIntrests;
