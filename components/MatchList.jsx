"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const profiles = [
  {
    id: 1,
    name: "Mads",
    age: 26,
    match: "85%",
    location: "Abuja",
    verified: true,
    avatar: "/Avatar1.png",
    background: "/Back1.png",
  },
  {
    id: 2,
    name: "Lena",
    age: 24,
    match: "90%",
    location: "Lagos",
    verified: false,
    avatar: "/Avatar2.png",
    background: "/Back2.png",
  },
  {
    id: 3,
    name: "Sam",
    age: 30,
    match: "75%",
    location: "New York",
    verified: true,
    avatar: "/Avatar3.png",
    background: "/Back3.png",
  },
  {
    id: 4,
    name: "Emma",
    age: 28,
    match: "88%",
    location: "London",
    verified: false,
    avatar: "/Avatar4.png",
    background: "/Back4.png",
  },
  {
    id: 5,
    name: "Noah",
    age: 29,
    match: "80%",
    location: "Berlin",
    verified: true,
    avatar: "/Avatar5.png",
    background: "/Back5.png",
  },
  {
    id: 6,
    name: "Ava",
    age: 25,
    match: "92%",
    location: "Paris",
    verified: true,
    avatar: "/Avatar6.png",
    background: "/Back1.png",
  },
  {
    id: 7,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar7.png",
    background: "/Back4.png",
  },
  {
    id: 8,
    name: "Ava",
    age: 25,
    match: "92%",
    location: "Paris",
    verified: true,
    avatar: "/Avatar8.png",
    background: "/Back8.png",
  },
  {
    id: 9,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar2.png",
    background: "/Back2.png",
  },
  {
    id: 10,
    name: "Ava",
    age: 25,
    match: "92%",
    location: "Paris",
    verified: true,
    avatar: "/Avatar10.png",
    background: "/Back10.png",
  },
  {
    id: 11,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar11.png",
    background: "/Back11.png",
  },
  {
    id: 12,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar12.png",
    background: "/Back12.png",
  },
  {
    id: 13,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar13.png",
    background: "/Back13.png",
  },
  {
    id: 14,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar14.png",
    background: "/Back14.png",
  },
  {
    id: 15,
    name: "Ethan",
    age: 27,
    match: "77%",
    location: "Dubai",
    verified: false,
    avatar: "/Avatar14.png",
    background: "/Back14.png",
  },
];

const MatchList = () => {
  const [likedProfiles, setLikedProfiles] = useState([]);

  const toggleLike = (id) => {
    setLikedProfiles((prev) =>
      prev.includes(id)
        ? prev.filter((profileId) => profileId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4   py-4">
      {profiles.map((profile, index) => (
        <div
          key={profile.id}
          className="h-full bg-white rounded-2xl shadow-lg overflow-hidden relative"
        >
          <div className="relative">
            <Image
              src={profile.background}
              alt="Background"
              layout="responsive"
              width={500}
              height={300}
              className="h-24 w-full"
            />
            <div className="absolute top-[4rem] left-1/2 transform -translate-x-1/2">
              <Image
                src={profile.avatar}
                alt="Profile"
                width={70}
                height={70}
                className="rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* Card Content */}
          <div className="px-4 py-1 text-center text-[#000000]">
            <div className="flex justify-between text-sm font-bold">
              <span className="text-[9px]">
                {profile.name}, {profile.age}
              </span>
              <span className="text-[9px]">{profile.match} Match</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span className="text-[8px]">{profile.location}</span>
              {profile.verified && (
                <span className="text-[8px] inline-flex items-center">
                  <Image src="/Badge.png" alt="Badge" width={12} height={12} />
                  Verified Address
                </span>
              )}
            </div>
            <p className="text-gray-600 text-[8px] mt-2 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Buttons */}
            <div className="mt-4 mb-2 flex justify-between gap-4">
              <button
                className={`px-4 py-2 rounded-full text-[8px] ${
                  index % 3 === 0
                    ? "bg-green-500 text-white"
                    : "bg-[#ef2424] text-white"
                }`}
              >
                {index % 3 === 0 ? "View Info" : "More Info"}
              </button>
              <button
                className="text-gray-500"
                onClick={() => toggleLike(profile.id)}
              >
                {likedProfiles.includes(profile.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
