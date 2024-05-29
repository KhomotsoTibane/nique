import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Reservation from "@/components/Form/Reservation";

const Page = () => {
  return (
    <div className="flex max-h-screen min-h-screen flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2">
      <div className="relative col-span-1 max-h-screen">
        <PageHero backgroundImg="hero" cta="Book a Table" title="Reservation" />
      </div>
      <div className="col-span-1 max-h-screen">
        <Reservation />
      </div>
    </div>
  );
};

export default Page;
