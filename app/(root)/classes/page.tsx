import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";

const Page = () => {
  return (
    <div className="max-h-screen min-h-screen w-svw">
      <header className="fixed inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
    <HorizontalScroll/>
      <Navbar />
    </div>
  );
};

export default Page;
