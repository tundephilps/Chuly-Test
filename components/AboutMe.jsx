import React from "react";
import Image from "next/image";

const aboutMeDetails = [
  { label: "Gender", value: "Male", icon: "/Me1.png" },
  { label: "Age", value: "27", icon: "/Me2.png" },
  { label: "Occupation", value: "Engineer", icon: "/Me3.png" },
  { label: "Relationship", value: "Single", icon: "/Me4.png" },
  { label: "Location", value: "Lagos", icon: "/Me5.png" },
  { label: "Height range", value: "5’5 - 6’0", icon: "/Me6.png" },
  { label: "Weight range", value: "60 - 70kg", icon: "/Me7.png" },
  { label: "Religion", value: "Christianity", icon: "/Me8.png" },
  { label: "Nationality", value: "Nigerian", icon: "/Me9.png" },
];

const AboutMe = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-bold mb-4">About Me</h2>
      <div className="space-y-3">
        {aboutMeDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="inline-flex w-32 gap-3">
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <p className="text-sm font-normal">{item.label}: </p>
            </div>
            <div className="font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
