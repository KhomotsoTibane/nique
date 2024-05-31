import PageHero from "@/components/pageHero/PageHero";
import React from "react";

import Navbar from "@/components/navbar/Navbar";
import ClassDetails from "@/components/classDetails/ClassDetails";
import { URLProps } from "@/types";
import { getClassEvent } from "@/lib/actions/classEvent.action";
import { getStringAfterClass } from "@/lib/utils";
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


const page = async ({ params }: URLProps) => {
  const _id = getStringAfterClass(params.id);
  const result = await getClassEvent({ slug: _id });

  return (
    <div className=" flex flex-col justify-evenly md:grid md:grid-flow-dense md:grid-cols-2 lg:max-h-full">
      <div className="relative col-span-1 max-h-screen">
        <PageHero backgroundImg="hero" cta="Check Out" title="Our Menu" />
        <Navbar />
      </div>
      <div className="col-span-1 max-h-screen">
        <ClassDetails result={result} />
      </div>
    </div>
  );
};

export default page;
