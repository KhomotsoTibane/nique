import React from "react";
import Image from "next/image";

interface Props {
  backgroundImg: string;
  cta: string;
  title: string;
}

const PageHero = ({ backgroundImg, cta, title }: Props) => {
  return (
    <div
      className={` ${backgroundImg} left-0  top-0 flex h-[500px] items-center justify-center  lg:max-h-screen lg:min-h-screen`}
    >
      <header className=" absolute inset-x-0 bottom-auto top-0 z-[9999] flex  items-center justify-center py-12">
        <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
      </header>
      <div className="dark-overlay absolute inset-0 size-full  opacity-90"></div>
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="heading-h1-italic intro-slide-down text-primary">{cta}</h1>
        <h1 className="heading-medium intro-slide-up text-default">{title}</h1>
      </div>
    </div>
  );
};

export default PageHero;
