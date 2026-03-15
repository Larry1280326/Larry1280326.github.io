"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
  id="contact"
  className="flex flex-col items-center justify-center my-16 py-32 gap-8"
>
  <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
  <div className="z-10 text-center">
    <h5 className="text-2xl font-bold text-white my-2">
      Let&apos;s Connect
    </h5>
    <p className="text-[#ADB7BE] mb-4 max-w-lg">
      I&apos;m currently looking for new opportunities, my inbox is always
      open. Whether you have a question or just want to say hi, I&apos;ll
      try my best to get back to you!
    </p>
    <div className="socials flex flex-row gap-4 justify-center">
      <Link href="https://github.com/Larry1280326">
        <Image src={GithubIcon} alt="Github Icon" />
      </Link>
      <Link href="https://www.linkedin.com/in/kwun-ho-liu-97210a282/">
        <Image src={LinkedinIcon} alt="Linkedin Icon" />
      </Link>
      <Link href="https://www.instagram.com/larryyyyyyyy128/">
        <Image src={InstagramIcon} alt="Instagram Icon" />
      </Link>
    </div>
  </div>
</section>
  );
};

export default EmailSection;