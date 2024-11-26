function CardType3({titleText, contentText, imgSrc, extraClasses}) {
  return (
    <div className={`bg-white flex flex-col justify-center h-fit w-1/3 max-[992px]:w-full ${extraClasses}`}>
      <img
        src={imgSrc}
        alt="img"
        className="h-[300px] object-cover"
      ></img>
      <div className="p-8 flex flex-col gap-3">
        <h1 className="text-2xl uppercase max-sm:text-xl">
          {titleText}
        </h1>
        <p className="text-xl g-font-1 max-sm:text-lg">
          {contentText}
        </p>
        <a
          href="https://www.google.com"
          className="hover:text-sky-500 uppercase g-font-2 text-xs tracking-widest w-fit"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default CardType3;
