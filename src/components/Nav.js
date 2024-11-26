import Button from "./Button";
import { Link } from "wouter";
import logo from "../images/logo.png";

export default function Nav({
  theme,
  bgColor,
  textColor,
  nav_burger_color_css,
}) {
  const handleOpening = () => {
    //alert('Button clicked!');
    document.getElementById("sidebar").style.display = "inline-block";
  };

  return (
    <nav className={`flex justify-between px-6 py-1 z-10 w-full bg-${bgColor}`}>
      {/*left side*/}
      <span className="flex">
        <span className="hidden max-lg:flex">
          <Button
            displayText={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list w-[20px] h-[16px]"
                viewBox="0 0 20 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            }
            theme="transparent"
            extraClasses={nav_burger_color_css + " p-0"}
            onClick={handleOpening}
          />
        </span>
        <h2 className="flex items-center px-6 text-3xl">
          <Link href="/">
            <img src={logo} alt="logo" className="h-8"></img>
          </Link>
        </h2>
        <ul
          className={`flex gap-5 p-5 text-xs tracking-wider uppercase optima-bold max-lg:hidden text-${textColor}`}
        >
          <li>
            <Link href="/about">
              <p className="p-1 underline-offset-[20px] hover:underline">
                About Us
              </p>
            </Link>
          </li>
          <li>
            <Link href="/latest">
              <p className="p-1 underline-offset-[20px] hover:underline">
                Latest Launches
              </p>{" "}
            </Link>
          </li>
          <li>
            <p className="p-1 underline-offset-[20px] hover:underline">
              Communities
            </p>{" "}
          </li>
          <li>
            <p className="p-1 underline-offset-[20px] hover:underline">
              Sustainability
            </p>{" "}
          </li>
        </ul>
      </span>
      {/*right side*/}
      <span className="flex items-center justify-center max-sm:hidden">
        <ul
          className={`flex gap-5 p-3 text-xs tracking-widest uppercase optima-bold text-${textColor}`}
        >
          <li>
            <span className="inline-block p-1 lang-link">
              <span className="flex">
                Eng
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute flex-col hidden text-black lang-link-span">
                <ul className="bg-white w-[100px]">
                  <li className="p-1 border-solid border-[1px] border-gray-500 hover:bg-gray-200">
                    <a href="https://www.google.com">Sinhala</a>
                  </li>
                  <li className="p-1 border-solid border-[1px] border-gray-500 hover:bg-gray-200">
                    <a href="https://www.google.com">Tamil</a>
                  </li>
                </ul>
              </span>
            </span>
          </li>
          <li>
            <a href="https://www.google.com" className="flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-camera-video"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.google.com" className="flex p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </li>
        </ul>
        <Button
          displayText="Get In Touch"
          url="https://www.google.com"
          theme={theme}
        />
      </span>
    </nav>
  );
}
