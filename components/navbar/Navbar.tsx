import { Button } from "../ui/button";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavbarLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" fixed inset-x-0 bottom-12 z-[99999] flex w-svw items-center justify-center">
      <div className="flex items-center gap-2 rounded-[500px] bg-default px-6 py-2.5 text-black">
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image src="/assets/icons/menu.svg" width={15} height={15} alt="menu" />
            </HoverCardTrigger>
            <HoverCardContent align="start" sideOffset={30} className="bg-white text-black">
              <h5 className="mb-2 flex w-full items-start p-1">Pages</h5>
              <div className="flex flex-col justify-between">
                {NavbarLinks.map((item) => {
                  return (
                    <Link
                      href={item.route}
                      key={item.route}
                      className="flex justify-between border-b p-1"
                    >
                      <p>{item.label}</p>
                      <Image src={item.imgURL} height={24} width={24} alt={item.label} />
                    </Link>
                  );
                })}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Image src="/assets/icons/clock.svg" width={40} height={40} alt="operating hours" />
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
                  <div>4pm - 8pm</div>
                </div>
                <div className="col-span-2 flex grid-flow-dense items-start justify-between gap-8">
                  <div>
                    <strong>Sat - Sun</strong>
                  </div>
                  <div>5pm - 11pm</div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="hidden gap-3 md:flex">
          <Link href="/menu">
            <Button className="rounded-[500px] bg-transparent capitalize text-black hover:bg-slate-300">
              Menu
            </Button>
          </Link>
          <Link href="/resturant">
            <Button className="rounded-[500px] bg-transparent capitalize text-black hover:bg-slate-300">
              Resturant
            </Button>
          </Link>
          <Link href="/classes">
            <Button className="rounded-[500px] bg-transparent capitalize text-black hover:bg-slate-300">
              Classes
            </Button>
          </Link>
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
