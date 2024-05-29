import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Menu from "@/components/menu/Menu";

const Page = () => {
  return (
    <div className="flex max-h-screen min-h-screen flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2">
      <div className="relative col-span-1 max-h-screen">
      <PageHero backgroundImg="hero" cta="Check Out" title="Our Menu" />
      </div>
     <div className="col-span-1 max-h-screen">
     <Menu />
     </div>
    </div>
  );
};

export default Page;
