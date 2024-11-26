import Button from "./Button";
import CardType2 from "./CardType2";

function HomeSection2() {
  return (
    <div className="flex min-h-[100dvh] max-[992px]:flex-col lg:h-fit">
      {/*Title*/}
      <div className="flex flex-col items-start gap-5 w-1/3 px-3 py-12 max-[992px]:w-full lg:h-fit">
        <span className="g-font-2 text-xs tracking-widest text-gray-600 uppercase flex items-center gap-5">
          Living spaces
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <h1 className="uppercase text-5xl max-lg:text-4xl leading-snug">
          Architecture And Decor
        </h1>
        <p className="text-lg g-font-1 text-gray-600">
          At Royal Havenwood, we blend modern and classic architecture to create
          stunning, durable properties. Our interiors are designed with stylish
          furniture, soothing colors, and elegant decor, ensuring every space is
          both inviting and luxurious.
        </p>
        <span className="w-full max-[992px]:hidden">
          <Button
            displayText="View All Properties"
            theme="dark"
            width={"[80%]"}
            extraClasses={"w-[100%]"}
          />
        </span>
      </div>
      <div className="flex w-2/3 max-[992px]:w-full max-md:flex-col lg:h-fit">
        {/*Card Stock 1*/}
        <div className="flex flex-col justify-start w-1/2 px-3 max-md:w-full">
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Luxe lodging with 3 restaurants & a spa"}
            cardText2={"Mount Lavinia Hotel"}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/Second-scaled.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_2-2-706x385.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Polished, tropical hotel with tennis"}
            cardText2={"Hotel Sigiriya"}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/Hero-1-scaled.jpg"
            }
            cardImageMd={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/Hero-1-scaled.jpg"
            }
          />
        </div>
        {/*Card Stock 2*/}
        <div className="flex flex-col justify-start w-1/2 px-3 max-md:w-full">
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Center Point Grill & Bar"}
            cardText2={"Jetwing Blue Negombo"}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/About-us-scaled.jpg"
            }
            cardImageMd={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/About-us-scaled.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Baywatch Sea Food"}
            cardText2={"Dickwella Resort and Spa"}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/Interior-1-scaled.jpg"
            }
            cardImageMd={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/Interior-1-scaled.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Overlooking Weligama Bay"}
            cardText2={"Weligama Bay Resort"}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/laura-adai-J60bPeDiR8A-unsplash-scaled.jpg"
            }
            cardImageMd={
              "https://royalhavenwood.com/wp-content/uploads/2024/11/laura-adai-J60bPeDiR8A-unsplash-scaled.jpg"
            }
          />
        </div>
      </div>
      <span className="w-full hidden p-3 md:w-1/2 max-[992px]:flex">
        <Button
          displayText="View All Properties"
          theme="dark"
          width={"full"}
          extraClasses={"w-[100%]"}
        />
      </span>
    </div>
  );
}

export default HomeSection2;
