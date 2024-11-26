//import Button from "./Button";
import CardType1 from "./CardType1";

function HomeSection1() {
  return (
    <div className="h-[100dvh] flex flex-col items-start py-12 px-3 gap-6 max-[600px]:h-full">
      <span className="g-font-2 text-xs tracking-widest text-gray-600 uppercase flex items-center gap-5">
        New
        <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
      </span>
      <span className="w-full cursor-grab overflow-x-scroll no-scrollbar max-[600px]:h-fit">
        <span className="w-fit flex overflow-x-hidden gap-3 max-[600px]:flex-col max-[600px]:h-full">
          <CardType1
            cardHeader={"Communities 360° Tour"}
            cardHeaderClasses={"text-4xl"}
            cardText1={
              "Experience Royal Havenwood communities and ammenities from the comfort of your home."
            }
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/07/Untitled-design-1.png"
            }
            extraClasses={"h-[70dvh] w-[400px] max-[600px]:w-full"}
            btnText={"Try It Now"}
          />
          <CardType1
            cardHeader={"Intenational Projects"}
            cardHeaderClasses={"text-4xl"}
            cardText1={"Explore our portfolio of international projects."}
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/07/Untitled-design-2.png"
            }
            extraClasses={"h-[70dvh] w-[400px] max-[600px]:w-full"}
            btnText={"Read More"}
          />
          <CardType1
            cardHeader={"Discover our Blogs"}
            cardHeaderClasses={"text-4xl"}
            cardText1={
              "Click to read our top tips and tricks for property management, home decoration and more."
            }
            cardImage={
              "https://royalhavenwood.com/wp-content/uploads/2024/07/Untitled-design-3.png"
            }
            extraClasses={"h-[70dvh] w-[400px] max-[600px]:w-full"}
            btnText={"Read More"}
          />
        </span>
      </span>
    </div>
  );
}

export default HomeSection1;
