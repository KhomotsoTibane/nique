"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Footer from "../Footer";

interface ClassDetailsProps {
  result: {
    id: number;
    category: string;
    title: string;
    slug: string;
    date: string;
    image: string;
    details: {
      description: string;
      price: string;
      time: string;
      teacher: {
        name: string;
        description: string;
        language: string;
        img: string;
      };
    };
  };
}

const ClassDetails = ({ result }: ClassDetailsProps) => {
  return (
    <div className="flex w-full flex-col gap-6 bg-dark lg:max-h-screen lg:overflow-y-auto">
      <div className="flex flex-col gap-6 p-8">
        <div>
          <p className=" text-muted">Cooking Class</p>
          <h2 className="text-default">Reserve your spot</h2>
          <p className="text-large max-w-[700px] text-muted">
            Experience exceptional dining with us. Reserve your table today and indulge in a
            culinary journey like no other. Enjoy exquisite dishes, a welcoming atmosphere, and
            top-notch service.
          </p>
          <div className="my-2 flex items-center gap-6">
            <Button>Book A Spot</Button>
            <p className=" text-large text-muted">ZAR 500</p>
          </div>
        </div>
        <div className=" flex flex-col gap-8 px-8 py-4">
          <h1 className="heading-h2-italic">Details</h1>
          <div className="flex flex-col gap-8 text-muted">
            <div className="flex justify-between border-b border-muted py-4">
              <p className="flex items-center justify-center">Name</p>
              <p>{result.details.teacher.name}</p>
            </div>
            <div className="flex justify-between border-b border-muted py-4">
              <p className="flex items-center justify-center">Teacher</p>
              <div className="flex items-center">
                <Image
                  src={result.details.teacher.img}
                  alt={result.details.teacher.name}
                  width={45}
                  height={45}
                  className="hover:scale-110"
                />
                <p>{result.details.teacher.name}</p>
              </div>
            </div>
            <div className="flex justify-between border-b border-muted py-4">
              <p className="flex items-center justify-center">Language</p>
              <p>{result.details.teacher.language}</p>
            </div>
            <div className="flex justify-between border-b border-muted py-4">
              <p className="flex items-center justify-center">Location</p>
              <p>Nique, 46 Pretoria Street</p>
            </div>
          </div>

          <div>
            <h1 className="heading-h2-italic">Teacher</h1>
            <div className="flex items-center">
              <Image
                src={result.details.teacher.img}
                alt={result.details.teacher.name}
                width={100}
                height={100}
                className="hover:scale-110"
              />
              <p className="text-muted">{result.details.teacher.description}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ClassDetails;
