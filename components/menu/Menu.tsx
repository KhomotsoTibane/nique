"use client"
import { breakfastMenu, drinksMenu, lunchMenu, startersMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      };
  return (
    <div className="flex max-h-screen w-full flex-col gap-6 overflow-y-auto bg-dark">
      <div className="flex w-full justify-center gap-4 p-2 text-muted">
        {["Starters", "Breakfast", "Lunch", "Drinks"].map((link) => {
          return <Link key={link} href={`#${link}`}>
            <button onClick={() => scrollToSection(`${link}`)}>{link}</button>
          </Link>;
        })}
      </div>
      <div  id="Starters" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h3 font-bitter capitalize italic text-primary">starters</h1>
        <div className="flex flex-col gap-8">
          {startersMenu.map((starter) => {
            return (
              <div key={starter.name} className="flex gap-4">
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
                    <p className=""> {starter.name}</p> <p>$ {starter.price}</p>
                  </div>
                  <p className="text-muted">{starter.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Breakfast" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h3 font-bitter capitalize italic text-primary">Breakfast</h1>
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
                    <p className=""> {item.name}</p> <p>$ {item.price}</p>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Lunch"className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h3 font-bitter capitalize italic text-primary">Lunch</h1>
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
                    <p className=""> {item.name}</p> <p>$ {item.price}</p>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Drinks" className=" flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h3 font-bitter capitalize italic text-primary">Drinks</h1>
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
                    <p className=""> {item.name}</p> <p>$ {item.price}</p>
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
