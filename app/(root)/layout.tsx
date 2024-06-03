import React from "react";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <section className="flex max-h-screen flex-1 flex-col">
        <div className="mx-auto w-full">{children}</div>
      </section>
      <Toaster />
    </main>
  );
};

export default Layout;
