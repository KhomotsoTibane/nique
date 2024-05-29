import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

const Page = () => {
  return (
    <div className="hero max-h-screen min-h-screen w-svw">
      <header className="fixed inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="heading-h1-italic font-bitter text-primary">Discover</h1>
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={300} height={150} />
      </div>
      <Navbar />
    </div>
  );
};

export default Page;
