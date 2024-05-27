import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Menu from "@/components/menu/Menu";

const Page = () => {
  return (
    <div className="flex flex-col justify-evenly md:flex-row">
      <PageHero backgroundImg="hero" cta="Check Out" title="Our Menu" />
      <Menu />
    </div>
  );
};

export default Page;
