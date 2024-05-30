"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { NavbarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log("path", pathname);
  return (
    <div className="fixed inset-x-0 bottom-8 z-[99999] mx-4 flex items-center justify-center lg:absolute lg:bottom-12">
      <div className="flex items-center gap-2 rounded-[500px] bg-default px-6 py-2.5 text-black">
        <>
        <div className="hidden lg:flex">
          <HoverCard>
            <HoverCardTrigger asChild className="cursor-pointer">
              <Image src="/assets/icons/menu.svg" width={25} height={25} alt="menu" />
            </HoverCardTrigger>
            <HoverCardContent align="start" sideOffset={30} className="bg-white text-black">
              <h5 className="mb-2 flex w-full items-start p-1">Pages</h5>
              <div className="flex flex-col justify-between">
                {NavbarLinks.map((item) => {
                  return (
                    <Link
                      href={item.route}
                      key={item.route}
                      className="flex justify-between border-b p-1 hover:bg-lightGray"
                    >
                      <p className="font-medium">{item.label}</p>
                      <Image src={item.imgURL} height={24} width={24} alt={item.label} />
                    </Link>
                  );
                })}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex lg:hidden">
          <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-transparent">
                <Image src="/assets/icons/menu.svg" width={25} height={25} alt="menu" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] bg-default" align="start" sideOffset={20}>
              <h5 className="mb-2 flex w-full items-start p-2">Pages</h5>
              <div className="flex flex-col justify-between">
                {NavbarLinks.map((item) => {
                  return (
                    <Link
                      href={item.route}
                      key={item.route}
                      className="flex justify-between border-b p-2"
                    >
                      <p>{item.label}</p>
                      <Image src={item.imgURL} height={24} width={24} alt={item.label} />
                    </Link>
                  );
                })}
              </div>
              </PopoverContent>
            </Popover>
        </div>
        </>

        <>
          <div className="hidden lg:flex">
            <HoverCard>
              <HoverCardTrigger asChild className="cursor-pointer rounded-full hover:bg-lightGray">
                <Image src="/assets/icons/clock.svg" width={50} height={50} alt="operating hours" />
              </HoverCardTrigger>
              <HoverCardContent align="start" sideOffset={30} className="bg-white text-black">
                <h5 className="mb-2 flex w-full items-start">Operating hours</h5>
                <div className="flex flex-col justify-between">
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Mon</strong>
                    </div>
                    <div>Closed</div>
                  </div>
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Tue - Fri</strong>
                    </div>
                    <div>9am - 8pm</div>
                  </div>
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Sat - Sun</strong>
                    </div>
                    <div>9am - 11pm</div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-transparent">
                  <Image
                    src="/assets/icons/clock.svg"
                    width={55}
                    height={55}
                    alt="operating hours"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-default" align="start" sideOffset={20}>
                <h5 className="mb-2 flex w-full items-start">Operating hours</h5>
                <div className="flex flex-col justify-between">
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Mon</strong>
                    </div>
                    <div>Closed</div>
                  </div>
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Tue - Fri</strong>
                    </div>
                    <div>4pm - 8pm</div>
                  </div>
                  <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                    <div>
                      <strong>Sat - Sun</strong>
                    </div>
                    <div>5pm - 11pm</div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </>

        <div className="hidden gap-3 md:flex">
          {[
            { href: "menu", label: "Menu" },
            { href: "resturant", label: "Resturant" },
            { href: "classes", label: "Classes" },
          ].map((link) => {
            const isActive =
              (pathname.includes(link.href) && link.href.length > 1) || pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  className={` ${isActive ? "bg-lightGray" : "bg-transparent"} rounded-[500px] text-[1rem] font-bold capitalize text-black hover:bg-lightGray`}
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/reservation">
            <Button className="rounded-[500px] bg-black capitalize text-default">
              Book a table
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
