import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nique - Authentic Thai Cuisine",
  description:
    "Welcome to Nique, where we serve the finest authentic Thai cuisine. Experience the rich flavors and vibrant culture of Thailand with every meal.",
  keywords:
    "Thai restaurant, authentic Thai cuisine, Thai food, dining, restaurant, Bangkok, Thai flavors, Nique",
  openGraph: {
    images: "/assets/images/niquemeta.png",
  },
};

const Page = () => {
  return (
    <div className="hero max-h-screen min-h-screen w-svw overflow-hidden">
      <header className="fixed inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="heading-h1-italic intro-slide-down text-primary">The pure taste of</h1>
        <h1 className="heading-xlarge text-default intro-slide-up">Thailand</h1>
        <div className="text-xlarge max-w-lg text-wrap text-center text-default intro-slide-up">
          <p>
            {" "}
            From our sizzling street food to our sumptuous signature dishes, every bite is a journey
            to the heart of Thai culture.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Page;
