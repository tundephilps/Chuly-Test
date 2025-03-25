import React from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import PostUpdate from "@/components/PostUpdate";
import HobbiesSection from "@/components/HobbiesSection";
import MyIntrests from "@/components/MyIntrests";
import AboutMe from "@/components/AboutMe";

const Profile = () => {
  return (
    <div className="">
      <div className="relative bg-gray-100 rounded-lg ">
        {/* Cover Image */}
        <div className="relative w-full h-48">
          <Image
            src="/Banner.png" // Replace with actual cover image
            alt="Cover"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="absolute top-3 w-full flex items-center justify-between px-8">
            <button className=" bg-black/60 text-white px-3 py-1 text-xs rounded-md">
              Back
            </button>
            <button className=" bg-black/60 text-white px-3 py-1 text-xs rounded-md">
              Update Cover
            </button>
          </div>
          <div className="flex absolute top-[8vh] left-[3vw] items-start gap-4 p-4">
            <div className="relative">
              {/* Profile Picture */}
              <Image
                src="/Profile.png" // Replace with actual profile image
                alt="Profile"
                width={100}
                height={100}
                className="rounded-lg border-4 h-[180px] w-[180px] border-white shadow-md"
              />
              {/* Edit Profile Picture Button */}
              <button className="absolute -bottom-3 -right-1 bg-blue-800 text-white rounded-full cursor-pointer h-6 w-6 shadow">
                +
              </button>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col pt-4">
              <h2 className="text-lg font-semibold flex items-center">
                Temiloluwa, 27{" "}
                <FaEdit className="ml-6 text-gray-500 text-sm cursor-pointer" />
              </h2>
              <p className="text-gray-600">Lagos</p>
            </div>
          </div>
        </div>

        {/* Profile Section */}

        {/* Action Buttons */}
        <div className="flex justify-end items-end gap-3 lg:mt-2 mt-16 py-4 w-full">
          <button className="bg-[#ef2424] text-white px-4 py-2 rounded-full text-xs">
            Edit Profile
          </button>
          <button className="bg-[#ef2424] text-white px-4 py-2 rounded-full text-xs">
            Edit Match Setup
          </button>
        </div>
      </div>

      <PostUpdate />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <HobbiesSection />
        <MyIntrests />
        <AboutMe />
      </div>
    </div>
  );
};

export default Profile;
