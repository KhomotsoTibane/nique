import React from "react";
import type { Metadata } from "next";

import "./globals.css";





export const metadata: Metadata = {
  title: "Nique - Authentic Thai Cuisine",
  description: "Welcome to Nique, where we serve the finest authentic Thai cuisine. Experience the rich flavors and vibrant culture of Thailand with every meal.",
  keywords: "Thai restaurant, authentic Thai cuisine, Thai food, dining, restaurant, Bangkok, Thai flavors, Nique",
  icons:{
    icon:'/assets/icons/favicon.ico'
  },
  openGraph: {
    images: "/assets/images/niquemeta.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
