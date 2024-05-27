import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <section className="flex max-h-screen flex-1 flex-col">
        <div className="mx-auto w-full">{children}</div>
      </section>
      <Navbar/>
    </main>
  );
};

export default Layout;
