"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

const Page = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop < 100); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero max-h-screen min-h-screen w-svw">
      <header className="fixed inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
      <ImageSlider />
      <div
        className={`fixed inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className={` ${!isVisible ? "slide-up" :""} heading-h1-italic  font-bitter text-primary`}>Discover</h1>
        <Image
          src="/assets/icons/nique-logo.svg"
          alt="logo"
          width={300}
          height={150}
          className={` ${!isVisible ? "slide-down" :""}`}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center">
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
