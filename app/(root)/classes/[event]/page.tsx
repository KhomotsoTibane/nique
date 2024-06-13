import PageHero from "@/components/pageHero/PageHero";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import ClassDetails from "@/components/classDetails/ClassDetails";
import { getClassEvent } from "@/lib/actions/classEvent.action";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooking Classes | Nique - Authentic Thai Cuisine",
  description:
    "Welcome to Nique, where we serve the finest authentic Thai cuisine. Experience the rich flavors and vibrant culture of Thailand with every meal.",
  keywords:
    "Thai restaurant, authentic Thai cuisine, Thai food, dining, restaurant, Bangkok, Thai flavors, Nique",
  openGraph: {
    images: "/assets/images/niquemeta.png",
  },
};

interface Props {
  params: { event: string };
}

const page = async ({ params }: Props) => {
  const _id = params.event
  const result = await getClassEvent({ slug: _id });


 
  console.log("result", result)

  return (
    <div className=" flex flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2 lg:max-h-full">
      <div className="relative col-span-1 max-h-screen">
        <PageHero backgroundImg={result.image} cta={result.category} title={result.title} />
        <Navbar />
      </div>
      <div className="col-span-1 max-h-screen">
        <ClassDetails result={result} />
      </div>
    </div>
  );
};

export default page;