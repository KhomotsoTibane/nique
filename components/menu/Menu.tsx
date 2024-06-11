"use client";
import { breakfastMenu, drinksMenu, lunchMenu, startersMenu } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../Footer";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("Starters");
  const scrollToSection = (sectionId: string) => {
    const section = sectionId;
    setActiveMenu(section);
    if (section) {
      const element = document.getElementById(section);
      element?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };
  return (
    <div className="flex w-full flex-col gap-6 bg-dark lg:max-h-screen lg:overflow-y-auto">
      <div className="sticky top-0 z-50 flex w-full justify-center gap-4 bg-dark p-2">
        {["Starters", "Breakfast", "Lunch", "Drinks"].map((link) => {
          return (
            <button
              className={`${activeMenu === link ? "text-primary" : "text-muted"}`}
              key={link}
              onClick={() => scrollToSection(link)}
            >
              {link}
            </button>
          );
        })}
      </div>
      <div id="Starters" className="flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic mt-8">starters</h1>
        <div className=" flex flex-col gap-8">
          {startersMenu.map((item) => {
            return (
              <div
                key={item.name}
                className={`${item.mealOfTheDay ? "border border-primary" : ""} relative flex gap-4 rounded-xl p-4`}
              >
                {item.mealOfTheDay && (
                  <div className="absolute -top-6 right-3 rounded-md bg-primary p-1 text-black">
                    Starter of the day
                  </div>
                )}
                <div className="flex size-full max-h-[80px] max-w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-xl ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="hover:scale-110 "
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex flex-col  justify-between gap-2 text-default md:flex-row">
                    <h3 className="menu-title flex gap-2">
                      {" "}
                      {item.name}
                      {item.isVegan && (
                        <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16} />
                      )}
                    </h3>{" "}
                    <h3 className="menu-price">
                      {item.mealOfTheDay ? (
                        <>
                          <span className="text-muted line-through">ZAR {item.price}</span> ZAR{" "}
                          {item.adjustedPrice}
                        </>
                      ) : (
                        <>ZAR {item.price}</>
                      )}
                    </h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Breakfast" className="flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic mt-8">Breakfast</h1>
        <div className="flex flex-col gap-8">
          {breakfastMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="flex size-full max-h-[80px] max-w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-xl ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="hover:scale-110 "
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex flex-col  justify-between gap-2 text-default md:flex-row">
                    <h3 className="menu-title flex gap-2">
                      {" "}
                      {item.name}
                      {item.isVegan && (
                        <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16} />
                      )}
                    </h3>{" "}
                    <h3 className="menu-price">
                      {item.mealOfTheDay ? (
                        <>
                          <span className="text-muted line-through">ZAR {item.price}</span> ZAR{" "}
                          {item.adjustedPrice}
                        </>
                      ) : (
                        <>ZAR {item.price}</>
                      )}
                    </h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Lunch" className="flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic mt-8">Lunch</h1>
        <div className="flex flex-col gap-8">
          {lunchMenu.map((item) => {
            return (
              <div
                key={item.name}
                className={`${item.mealOfTheDay ? "border border-primary" : ""} relative flex gap-4 rounded-xl p-4`}
              >
                {item.mealOfTheDay && (
                  <div className="absolute -top-6 right-3 rounded-md bg-primary p-1 text-black">
                    Lunch of the day
                  </div>
                )}
                <div className="flex size-full max-h-[80px] max-w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-xl ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="hover:scale-110 "
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex flex-col  justify-between gap-2 text-default md:flex-row">
                    <h3 className="menu-title flex gap-2">
                      {" "}
                      {item.name}
                      {item.isVegan && (
                        <Image src="/assets/icons/vegan.svg" alt="vegan" width={16} height={16} />
                      )}
                    </h3>{" "}
                    <h3 className="menu-price">
                      {item.mealOfTheDay ? (
                        <>
                          <span className="text-muted line-through">ZAR {item.price}</span> ZAR{" "}
                          {item.adjustedPrice}
                        </>
                      ) : (
                        <>ZAR {item.price}</>
                      )}
                    </h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="Drinks" className="flex flex-col gap-8 px-8 py-4">
        <h1 className="heading-h2-italic mt-8">Drinks</h1>
        <div className="flex flex-col gap-8">
          {drinksMenu.map((item) => {
            return (
              <div key={item.name} className="flex gap-4">
                <div className="flex size-full max-h-[80px] max-w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-xl ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="hover:scale-110 "
                  />
                </div>
                <div className="flex grow flex-col justify-center gap-1">
                  <div className="flex flex-col  justify-between gap-2 text-default md:flex-row">
                    <h3 className="menu-title"> {item.name}</h3>{" "}
                    <h3 className="menu-price"> ZAR {item.price}</h3>
                  </div>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
