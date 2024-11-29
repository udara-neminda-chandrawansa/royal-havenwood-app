import Button from "./Button";
import CardType1 from "./CardType1";
import React, { useRef } from "react";
import img_1 from "../images/landing/hayrullah-gozcu-bltGAZI75-4-unsplash-1-scaled-607x726.jpg";
import img_2 from "../images/landing/viktor-jakovlev-H0vuplqoX0c-unsplash-scaled-607x726.jpg";
import img_3 from "../images/landing/Interior-1-scaled-607x726.jpg";
import img_4 from "../images/landing/spacejoy-KSfe2Z4REEM-unsplash-scaled-607x726.jpg";
import img_5 from "../images/landing/webaliser-_TPTXZd9mOo-unsplash-scaled-607x726.jpg";
import img_6 from "../images/landing/zion-c-sGblr5yVXiM-unsplash-607x726.jpg";
import img_7 from "../images/landing/vu-anh-TiVPTYCG_3E-unsplash-scaled-607x726.jpg";
import img_8 from "../images/landing/diane-picchiottino-GXLazwyfl0k-unsplash-scaled-607x726.jpg";
import img_9 from "../images/landing/ryan-ancill-Vew4xyLkpdY-unsplash-1-scaled-607x726.jpg";
import img_10 from "../images/landing/adam-neumann-2I5t_A3N5N4-unsplash-scaled-607x726.jpg";
import img_11 from "../images/landing/claudia-lorusso-EUByJmBmVEw-unsplash-scaled-607x726.jpg";
import img_12 from "../images/landing/victor-Ze9ykREkuVA-unsplash-scaled-607x726.jpg";

function HomeSection3() {
  const scrollContainerRef = useRef(null);

  // Method to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust this value to control how far to scroll left
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Method to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust this value to control how far to scroll right
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <div className="h-[100dvh] flex items-center justify-center px-3 py-12 max-lg:h-fit">
      <div className="flex flex-col w-full gap-3">
        <span className="flex items-center gap-5 text-xs tracking-widest text-gray-600 uppercase g-font-2">
          Projects
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex items-center justify-between">
          <h1 className="text-5xl leading-snug uppercase max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
            Featured Projects
          </h1>
          <span className="max-md:hidden">
            <Button
              displayText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              }
              onClick={scrollLeft}
              theme={"transparent"}
              width={"[100px]"}
              extraClasses={"w-[90px]"}
            />
            <Button
              displayText={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              }
              onClick={scrollRight}
              theme={"transparent"}
              width={"[100px]"}
              extraClasses={"w-[90px]"}
            />
          </span>
        </span>
        <div
          id="scroll-container"
          className="overflow-x-scroll select-none no-scrollbar cursor-grab"
          ref={scrollContainerRef}
        >
          <span className="flex gap-5 py-3 w-fit">
            <CardType1
              cardHeader={"Design Role"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_1}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Means Of Design"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_2}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Environmental Role"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_3}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Construction Role"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_4}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Lighting Design"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_5}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Alternate Practice"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_6}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Architectural Designer"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_7}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Architectural Drawing"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_8}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Chartered Architect"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_9}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Landscape Architect"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_10}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"List Of Architects"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_11}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Architect Like"}
              cardHeaderClasses={"text-2xl max-xl:text-xl max-lg:text-lg"}
              cardText1={"Outdoor Design"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardImage={img_12}
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
