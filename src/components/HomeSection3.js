import Button from "./Button";
import CardType1 from "./CardType1";
import React, { useRef } from "react";

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
    <div className="h-[100vh] flex items-center justify-center px-3 py-12 max-lg:h-fit">
      <div className="flex flex-col gap-3 w-full">
        <span className="g-font-2 text-xs tracking-widest text-gray-600 uppercase flex items-center gap-5">
          Communities
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex justify-between items-center">
          <h1 className="uppercase text-5xl max-lg:text-4xl leading-snug">
            Featured Communities
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
          className="overflow-x-scroll no-scrollbar cursor-grab select-none"
          ref={scrollContainerRef}
        >
          <span className="flex w-fit gap-5 py-3">
            <CardType1
              cardHeader={"The Heights Country Club & Wellness"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Where Life is Well-Lived"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"3 & 4 Bedroom Townhouses and 4 Bedroom Villas"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2024/06/THE-HEIGHT-_320X415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Address Al Marjan Island, Ras Al Khaimah"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"New vision of luxury beachfront living"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"Apartments, Townhouses and Sea Front-Homes"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2024/05/Community-Featured-Image-portrait-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"The Oasis"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Immerse in Pure Luxury"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"Villas and Mansions"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2023/06/OASIS_320-x-415-320x415-1-320x415.jpg.webp"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Dubai Marina"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"A path-breaking waterfront project by UNC"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"-"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/DUBAI_MARINA_COMMUNITY-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Dubai Hills Estate"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"The green heart of Dubai"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"3 to 6 BEDROOM VILLAS"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/DHE_COMMUNITY_HERO-resize-scaled-1-320x415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Dubai Creek Harbour"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Views to Live for"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"Apartments and Villas"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/DUBAI_CREEK_HARBOUR_HERO-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Arabian Ranches III"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Find your happy"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"3 & 4 Bedroom Villas"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/EMAAR_DubaiRanchesMP_CGI07_04-3-scaled-1-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"The Valley"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Dreams begin here"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"3 & 4 Bedroom Townhouses"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/EMAAR_DubaiValley_CGI03_resize-scaled-1-320x415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"Downtown Dubai"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"THE ULTIMATE ADDRESS"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"1 to 6 Bedroom Apartments"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/AHD_BRAND_VIEW-FROM-ADDRESS-FOUNTAIN-VIEWS_AMBIENT_HR_01-resize-scaled-1-320x415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"UNC South"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"Local Community With A Global Gateway"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"3 & 4 Bedroom Villas"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/ES_View_13-scaled-1-320x415.jpg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"UNC Beachfront"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"PRIVATE BEACH LIVING"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"Apartments and Villas"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/BENOY_DubaiHarbour_CGI12_02-resize-scaled-1-320x415.jpeg"
              }
              cardImageClasses={"h-[400px]"}
              btnText={"nobtn"}
              extraClasses={"w-[300px] h-fit py-1 gap-3"}
            />
            <CardType1
              cardHeader={"RASHID YACHTS & MARINA"}
              cardHeaderClasses={"text-2xl"}
              cardText1={"A Unique Heritage Sails Into The Future"}
              cardText1Classes={
                "uppercase text-xs g-font-2 tracking-widest p-1"
              }
              cardText2={"1, 2 & 3 Bedroom Apartments"}
              cardText2Classes={"text-xs g-font-2 p-1 tracking-widest"}
              cardImage={
                "https://cdn.emaar.com/wp-content/uploads/2021/08/EMAAR_MinaRashid_CGI19_06-scaled-1-320x415.jpg"
              }
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
