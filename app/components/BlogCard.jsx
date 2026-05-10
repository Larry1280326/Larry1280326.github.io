import React from "react";

const BlogCard = ({ imgUrl, title, description, location, date, onClick }) => {
  return (
    <div
      className="rounded-xl overflow-hidden bg-[#181818] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      onClick={onClick}
    >
      <div className="h-52 md:h-72 relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 hover:opacity-100 font-semibold text-lg">Click to view all photos</span>
        </div>
      </div>
      <div className="text-white py-6 px-4">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          <span className="text-[#ADB7BE] text-sm">{date}</span>
        </div>
        <p className="text-[#ADB7BE] text-sm mb-2">📍 {location}</p>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
