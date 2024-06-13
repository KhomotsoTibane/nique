"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Card } from "./Card";
import { classes } from "@/constants";
import Link from "next/link";

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-500vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
      
        },
        onComplete: () => {
          gsap.to(sectionRef.current, { translateX: 0, duration: 0 });
          ScrollTrigger.refresh();
        }
      }
    );
    return () => {
      //   {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);
  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-classes-inner">
          {classes.map(({ id, image, date, category, title, slug }) => (
            <div className="scroll-section-classes" key={id}>
              <Link href={`/classes/${slug}`}>
              <Card
                key={id}
                image={image}
                date={date}
                category={category}
                heading={title}
              />
            </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll;

// {items.map(({ id, image, date, category, title, slug }) => (
//   <Link href={`/class/${slug}`} key={id}>
//   <Card
//     title={id}
//     itemId={id} // NOTE: itemId is required for track items
//     key={id}
//     image={image}
//     date={date}
//     category={category}
//     heading={title}
//   />
//   </Link>
// ))}
