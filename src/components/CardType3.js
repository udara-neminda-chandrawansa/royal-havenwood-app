function CardType3({titleText, contentText, imgSrc, extraClasses}) {
  return (
    <div className={`bg-white flex flex-col justify-center h-fit w-1/3 max-[992px]:w-full ${extraClasses}`}>
      <img
        src={imgSrc}
        alt="img"
        className="h-[300px] object-cover"
      ></img>
      <div className="flex flex-col gap-3 p-8">
        <h1 className="text-2xl uppercase max-xl:text-xl max-lg:text-lg">
          {titleText}
        </h1>
        <p className="text-xl max-xl:text-lg max-lg:text-base max-md:text-sm g-font-1">
          {contentText}
        </p>
        <a
          href="https://www.google.com"
          className="text-xs tracking-widest uppercase hover:text-sky-500 g-font-2 w-fit"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default CardType3;
