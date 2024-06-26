import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

interface Props {
  backgroundImg: string;
  cta: string;
  title: string;
}

const PageHero = ({ backgroundImg, cta, title }: Props) => {
  return (
    <div className={`${backgroundImg} left-0 top-0 max-h-screen min-h-screen w-full lg:sticky`}>
      <header className=" absolute inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="heading-h1-italic font-bitter text-primary">{cta}</h1>
        <h1 className="heading-xlarge font-merida text-default">{title}</h1>
      </div>
      <Navbar/>
    </div>
  );
};

export default PageHero;
