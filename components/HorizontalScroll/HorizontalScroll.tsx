"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  images?: { name?: string; image: string; category?: string; title?: string; date?: string }[];
}

const HorizontalScroll = ({ images }: Props) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);


  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "100 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      // {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer">
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            {" "}
            <div className="scroll-section">
              {images?.map(({ name, image, category, date, title }) => (
                <div key={name}>
                  <div className="relative flex w-[50vw] justify-center">
                    <img src={image} alt={name} />
                    <h3 className=" absolute inset-0 border border-purple-800 text-primary">assdadjd</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Navbar /> */}
    </>
  );
};

export default HorizontalScroll;
