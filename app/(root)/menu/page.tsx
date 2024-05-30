import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";

const Page = () => {
  return (
    <div className=" flex flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2 lg:max-h-full">
      <div className="relative col-span-1 max-h-screen">
      <PageHero backgroundImg="hero" cta="Check Out" title="Our Menu" />
      <Navbar/>
      </div>
     <div className="col-span-1 max-h-screen">
     <Menu />
     </div>
    </div>
  );
};

export default Page;


