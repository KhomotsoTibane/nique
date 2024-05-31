"use client";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Card } from "./Card";
import { classes } from "@/constants";
import Link from "next/link";

import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!

// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  classes.map((classItem, ind) => ({ ...classItem, id: getId(ind) }));


function HorizontalScroll() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  console.log("items", items);

  return (
    <>
      <div className="scroll-container " style={{}}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu onWheel={onWheel}>
            {items.map(({ id, image, date, category, title, slug }) => (
              <Link href={`/class/${slug}`} key={id}>
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                image={image}
                date={date}
                category={category}
                heading={title}
              />
              </Link>
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default HorizontalScroll;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
