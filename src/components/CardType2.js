import React, { useState, useEffect } from "react";

function CardType2({
  cardText1,
  cardText2,
  cardUrl,
  cardImage,
  cardImageMd,
  extraClasses,
  blackLinePClasses
}) {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-between ${extraClasses}`}
    >
      <span className="overflow-hidden w-full group">
        <img
          src={isMdScreen ? cardImageMd : cardImage}
          alt={cardText1}
          className="w-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </span>
      <span className="flex w-full py-3 gap-3 g-font-2 uppercase text-xs tracking-widest">
        <a href={cardUrl} className="w-3/4 max-md:w-fit max-sm:w-1/3">
          {cardText1}
        </a>
        <p className={`w-1/4 px-2 border-l-[1px] border-l-black max-md:w-fit max-sm:w-2/3 max-sm:h-fit ${blackLinePClasses}`}>
          {cardText2}
        </p>
        <div className="relative right-0 border-t-[1px] border-t-gray-400 w-[130px] max-md:absolute max-md:right-3 max-sm:w-[50px]"></div>
      </span>
    </div>
  );
}

export default CardType2;
