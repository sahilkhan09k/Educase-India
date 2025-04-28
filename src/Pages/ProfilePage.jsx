import React, { useState } from "react";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg min-h-[80vh]  flex flex-col">
        <h1 className="text-4xl p-6 font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>

        <div className="bg-gray-100 p-8 flex flex-col position-relative h-full">
          {/* Profile Picture */}
          <div className="relative flex">
            <img
              src={profileImage}
              alt="Profile"
              className="w-30 h-30 rounded-full object-cover"
            />
            {/* Hidden File Input */}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {/* Camera Icon (Label) */}
            <label
              htmlFor="fileInput"
              className="absolute bottom-0 left-20 bg-purple-600 p-1 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-4.553a.5.5 0 00-.707-.707L14.293 9.293a1 1 0 01-1.414 0L9.707 6.707a.5.5 0 00-.707.707L13 10l-4.553 4.553a.5.5 0 00.707.707L14.293 10.707a1 1 0 011.414 0l4.553 4.553a.5.5 0 00.707-.707L15 10z"
                />
              </svg>
            </label>

            <div className="mt-4 ml-6">
              <h2 className="text-[25px] font-bold text-gray-800">Marry Doe</h2>
              <p className="text-gray-600 text-[20px]">Marry@Gmail.Com</p>
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-800 mt-8 text-[20px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="flex">
            <div className="w-full border-t-2 border-dotted border-gray-500 my-6"></div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
