import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Contact from "@/components/Form/Contact";

const Page = () => {
  return (
    <div className="flex max-h-screen min-h-screen flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2">
      <div className="relative col-span-1 lg:max-h-screen">
        <PageHero backgroundImg="hero" cta="Contact" title="Get in Touch" />
      </div>
      <div className="col-span-1 max-h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
