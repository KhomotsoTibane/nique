import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-10 text-default">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:items-start">
          <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
          <p>
            By{" "}
            <a href="https://khomotso.vercel.app" className="hover:underline">
              <span className="text-primary">Khomotso Tibane</span>
            </a>
            .
          </p>
          <p>
            Design{" "}
            <a href="https://templates.gola.io" className="hover:underline">
              <span className="text-primary">Pawel Gola</span>
            </a>
            .
          </p>
          <p>
            Figma File{" "}
            <a href="https://www.figma.com/design/vhYv3pJorInXp2b4WXBbei/Nique---Restaurant-Website---Webflow-Template-(Community)?node-id=201-1936&t=yoOMpVe0VC7AmCWo-0" className="hover:underline">
              <span className="text-primary">Here</span>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
