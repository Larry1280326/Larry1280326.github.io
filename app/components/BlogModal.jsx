"use client";
import React, { useEffect } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const BlogModal = ({ blog, photos, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (!blog || !photos) return null;

  const currentPhoto = photos[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>

      {/* Main content */}
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
          <p className="text-[#ADB7BE] text-sm">
            📍 {blog.location} • {blog.date} • Photo {currentIndex + 1} of {photos.length}
          </p>
        </div>

        {/* Image viewer */}
        <div className="flex-1 flex items-center justify-center relative px-4">
          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          {/* Image container */}
          <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentPhoto.src.startsWith("/") ? currentPhoto.src : `/${currentPhoto.src}`}
              alt={currentPhoto.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Photo info */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-1">{currentPhoto.title}</h3>
          <p className="text-[#ADB7BE]">{currentPhoto.description}</p>
        </div>

        {/* Thumbnail strip */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-800 overflow-x-auto">
          <div className="flex gap-2">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-14 flex-shrink-0 rounded overflow-hidden ${
                  index === currentIndex ? "ring-2 ring-white" : "opacity-50 hover:opacity-80"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src.startsWith("/") ? photo.src : `/${photo.src}`}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
