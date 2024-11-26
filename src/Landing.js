import "./App.css";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";
import HomeSection3 from "./components/HomeSection3";
import Footer from "./components/Footer";

export default function Landing() {  
  return (
    <>
      <div className="flex flex-row h-[100dvh] w-full bg-blue-400">
        <Sidebar/>
        <Banner/>
      </div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Footer />
    </>
  );
}