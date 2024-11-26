import { Link } from "wouter";
import Button from "./Button";

export default function Sidebar() {
  const handleClosing = () => {
    document.getElementById("sidebar").style.display = "none";
  };

  return (
    <div className="z-10 bg-white hidden max-sm:text-sm h-[100vh]" id="sidebar">
      <Button displayText="X" onClick={handleClosing} />
      <ul className="w-[300px] flex flex-col gap-3 flex-grow p-3 border-t-[1px] border-t-gray-300">
        <li>
          <Link href="/about">
            <p className="p-1 flex">About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/latest">
            <p className="p-1 border-t-[1px] border-t-gray-300 flex">
              Latest Launches
            </p>
          </Link>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Communities
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Sustainability
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Eng
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="p-1 border-t-[1px] border-t-gray-300 flex"
          >
            Instant Video Call
          </a>
        </li>
        <li>
          <Button
            displayText="Get In Touch"
            url="https://www.google.com"
            theme="dark"
            width="full"
          />
        </li>
      </ul>
    </div>
  );
}
