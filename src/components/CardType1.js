import Button from "./Button";

function CardType1({
  cardHeader,
  cardHeaderClasses,
  cardText1,
  cardText1Classes,
  cardText2,
  cardText2Classes,
  cardImage,
  cardImageClasses,
  btnText,
  extraClasses,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between ${extraClasses}`}
    >
      <span className="h-1/2 overflow-hidden w-full group">
        <img
          className={`w-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 ${cardImageClasses}`}
          src={cardImage}
          alt={cardHeader}
        ></img>
      </span>
      <h1 className={`uppercase text-center ${cardHeaderClasses}`}>
        {cardHeader}
      </h1>
      <span className="flex flex-col">
        <p className={`text-center text-gray-600 ${cardText1Classes}`}>
          {cardText1}
        </p>
        <p className={`text-center text-gray-600 ${cardText2Classes}`}>
          {cardText2}
        </p>
      </span>
      {btnText !== "nobtn" ? (
        <Button
          displayText={btnText}
          theme={"dark"}
          extraClasses={"w-[200px]"}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CardType1;
