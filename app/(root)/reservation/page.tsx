import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Reservation from "@/components/Form/Reservation";
import Navbar from "@/components/navbar/Navbar";

const Page = () => {
  return (
    <div className=" flex flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2 lg:max-h-full">
    <div className="relative col-span-1 max-h-screen">
        <PageHero backgroundImg="hero" cta="Book a Table" title="Reservation" />
        <Navbar />
      </div>
      <div className="col-span-1 max-h-screen">
        <Reservation />
      </div>
    </div>
  );
};

export default Page;
