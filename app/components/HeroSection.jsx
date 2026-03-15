"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-7 flex flex-col justify-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                "Larry128",
                1000,
                "Student",
                1000,
                "Gamer",
                1000,
                "Larry128",
                1000,
              ]}
              wrapper='span'
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className='text-white text-base sm:text-lg lg:text-2xl py-8'>
            Hi, I am Larry128. I am currently a student at HKUST.
          </p>
          <div>
            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 text-white'
              onClick={scrollToAbout}
            >
              About Me
            </button>

            <button
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'
              onClick={scrollToBlog}
            >
              Blog
            </button>
          </div>
        </div>
        <div className='col-span-5 flex items-center justify-center mt-4 lg:mt-0'>
          <div className='rounded-full'>
            <Image
              src="/images/icon.png"
              alt="Profile picture of Larry128"
              className='rounded-full'
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;