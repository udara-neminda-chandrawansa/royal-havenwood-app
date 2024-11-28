import "./App.css";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";
import HomeSection3 from "./components/HomeSection3";
import Footer from "./components/Footer";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "./images/logo.png";

export default function Landing() {
  return (
    <>
      <div className="flex flex-row h-[100dvh] w-full bg-blue-400">
        <Sidebar />
        <Banner />
      </div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Footer />
      <WhatsAppWidget
        phoneNo="9477556677"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={3000}
        messageBox={true}
        messageBoxTxt="Hi! Can I get a quote?"
        iconSize="50"
        iconColor="white"
        iconBgColor="green"
        headerIcon={logo}
        headerIconColor="pink"
        headerTxtColor="white"
        headerBgColor="green"
        headerTitle="Royal Havenwood"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="green"
        btnTxt={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        }
        btnTxtColor="white"
      />
    </>
  );
}
