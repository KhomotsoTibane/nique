import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-10 text-default">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center md:text-left">
          <Image src="/assets/icons/nique-logo.svg" alt="logo" width={90} height={31} />
          <p>
            By{" "}
            <a href="https://templates.gola.io" className="hover:underline">
              <span className="text-primary">Pawel Gola</span>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
