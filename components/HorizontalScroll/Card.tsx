import React from "react";
import Image from "next/image";

export function Card({
  title,
  itemId,
  image,
  heading,
  date,
  category,
}: {
  title: string;
  itemId: string;
  image: string;
  heading: string;
  date: string;
  category: string;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      style={{
        userSelect: "none",
 
      }}
      className="card"
    >
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt="sd" 
       fill
          objectFit="cover" 
        />
      </div>
      <div className="dark-overlay absolute inset-0 size-full opacity-90"></div>
      <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-center">
        <h1 className="heading-h2-italic text-primary">{category}</h1>
        <h2 className=" text-default">{heading}</h2>
        <p className="text-muted">{date}</p>
      </div>
    </div>
  );
}
