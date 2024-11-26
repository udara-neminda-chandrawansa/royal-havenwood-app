import Button from "./Button";
import CardType2 from "./CardType2";

function HomeSection2() {
  return (
    <div className="flex min-h-[100vh] max-[992px]:flex-col lg:h-fit">
      {/*Title*/}
      <div className="flex flex-col items-start gap-5 w-1/3 px-3 py-12 max-[992px]:w-full lg:h-fit">
        <span className="g-font-2 text-xs tracking-widest text-gray-600 uppercase flex items-center gap-5">
          Properties
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <h1 className="uppercase text-5xl max-lg:text-4xl leading-snug">
          Premium Properties In the Best Locations
        </h1>
        <p className="text-lg g-font-1 text-gray-600">
          Our properties, located in prime areas, boast unique designs and
          aspirational lifestyles within vibrant UNC communities, all
          seamlessly managed by UNC Community Management's dedicated team.
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
            cardText1={"Velora 2 at The Valley Phase 2"}
            cardText2={"The Valley"}
            cardImage={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_2-2-440x570.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_2-2-706x385.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Vida Residences Club Point at Dubai Hills Estate"}
            cardText2={"Dubai Hills Estate"}
            cardImage={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_3-706x385.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/10/HERO_1620X832_3-706x385.jpg"
            }
          />
        </div>
        {/*Card Stock 2*/}
        <div className="flex flex-col justify-start w-1/2 px-3 max-md:w-full">
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Pier Point at Rashid Yachts & Marina"}
            cardText2={"Rashid Yachts & Marina"}
            cardImage={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_3-6-706x385.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_3-6-706x385.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Porto View at Rashid Yachts & Marina"}
            cardText2={"Rashid Yachts & Marina"}
            cardImage={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_1-6-706x385.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_1-6-706x385.jpg"
            }
          />
          <CardType2
            cardUrl={"https://www.google.com"}
            cardText1={"Greenridge at UNC South"}
            cardText2={"UNC South"}
            cardImage={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_1-3-706x385.jpg"
            }
            cardImageMd={
              "https://cdn.properties.emaar.com/wp-content/uploads/2024/09/HERO_1620X832_1-3-706x385.jpg"
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
