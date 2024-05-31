import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Contact from "@/components/Form/Contact";
import Navbar from "@/components/navbar/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nique - Authentic Thai Cuisine",
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
    <div className=" flex flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2 lg:max-h-full">
      <div className="relative col-span-1 max-h-screen">
        <PageHero backgroundImg="hero" cta="Contact" title="Get in Touch" />
        <Navbar/>
      </div>
      <div className="col-span-1 max-h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
