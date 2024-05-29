"use client";
import { breakfastMenu, drinksMenu, lunchMenu, startersMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex w-full flex-col gap-6 bg-dark lg:max-h-screen lg:overflow-y-auto">
      <div className="flex w-full justify-center gap-4 p-2 text-muted">
        {["Starters", "Breakfast", "Lunch", "Drinks"].map((link) => {
          return (
            <Link key={link} href={`#${link}`}>
              <button onClick={() => scrollToSection(`${link}`)}>{link}</button>
            </Link>
          );
        })}
      </div>
      <div id="Starters" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic">starters</h1>
        <div className="flex flex-col gap-8">
          {startersMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="max-h-[70] max-w-[90] overflow-hidden rounded-xl ">
                  <Image
                    src="/assets/images/noodle-soup.webp"
                    alt="menu item"
                    width={100}
                    height={77}
                    className="hover:scale-110"
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex justify-between text-default">
                    <h3 className="menu-title flex gap-2"> {item.name}
                    {item.isVegan && <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16}/>}
                    </h3>{" "}
                    <h3 className="menu-price">$ {item.price}</h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Breakfast" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic">Breakfast</h1>
        <div className="flex flex-col gap-8">
          {breakfastMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="max-h-[70] max-w-[90] overflow-hidden rounded-xl ">
                  <Image
                    src="/assets/images/menu-pumpkin-soup.webp"
                    alt="menu item"
                    width={100}
                    height={77}
                    className="hover:scale-110"
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex justify-between text-default">
                    <h3 className="menu-title flex gap-2"> {item.name}
                    {item.isVegan && <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16}/>}
                    </h3>{" "}
                    <h3 className="menu-price">$ {item.price}</h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Lunch" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic">Lunch</h1>
        <div className="flex flex-col gap-8">
          {lunchMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="max-h-[70] max-w-[90] overflow-hidden rounded-xl ">
                  <Image
                    src="/assets/images/menu-pumpkin-soup.webp"
                    alt="menu item"
                    width={100}
                    height={77}
                    className="hover:scale-110"
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex justify-between text-default">
                    <h3 className="menu-title flex gap-2"> {item.name}
                    {item.isVegan && <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16}/>}
                    </h3>{" "}
                    <h3 className="menu-price">$ {item.price}</h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Drinks" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic">Drinks</h1>
        <div className="flex flex-col gap-8">
          {drinksMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="max-h-[70] max-w-[90] overflow-hidden rounded-xl ">
                  <Image
                    src="/assets/images/menu-pumpkin-soup.webp"
                    alt="menu item"
                    width={100}
                    height={77}
                    className="hover:scale-110"
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex justify-between text-default">
                    <h3 className="menu-title"> {item.name}</h3>{" "}
                    <h3 className="menu-price">$ {item.price}</h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
