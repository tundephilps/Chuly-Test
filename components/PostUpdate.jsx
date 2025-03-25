"use client";
import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import Image from "next/image";

const PostUpdate = () => {
  const [bio, setBio] = useState("A few words about myself");
  const [editing, setEditing] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setPhotos([...photos, newImageUrl]);
    }
  };

  return (
    <div className=" py-4 lg:w-[35vw] w-full">
      {/* Bio Section */}
      <div className="bg-white p-3 rounded-lg border relative">
        <textarea
          type="text"
          placeholder="A few words about myself"
          className="w-full bg-white border-none focus:outline-none text-gray-700 text-sm h-[81px]"
        />
        <HiOutlinePencil className="absolute lg:right-[55%] right-[45%] top-3 text-gray-500" />
      </div>

      {/* Image Upload Section */}
      <div className="bg-white p-4 mt-4 border rounded-lg flex items-center gap-4 overflow-auto">
        {/* Display Uploaded Images */}
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt="Uploaded"
            width={80}
            height={80}
            className="rounded-lg"
          />
        ))}

        {/* Add Photo Slots */}
        {[...Array(5 - photos.length)].map((_, index) => (
          <label
            key={index}
            className="flex flex-col items-center justify-center w-20 h-20  border-gray-300 border rounded-lg cursor-pointer"
          >
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="text-center items-center flex flex-col gap-2 text-gray-500 text-xs">
              Add Photo
              <Image
                src="/Add.png" // Replace with actual icon
                alt="Add"
                width={30}
                height={30}
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PostUpdate;
