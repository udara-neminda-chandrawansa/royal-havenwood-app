import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Label, TextInput, Textarea } from "flowbite-react";

function ContactUs() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-[100dvw] h-full">
          {/*nav*/}
          <div className="p-1 border-b-[1px] border-b-gray-300">
            <Nav theme={"dark"}></Nav>
          </div>
          {/*title + text + form*/}
          <div className="flex flex-col gap-10 p-4 pt-16">
            <h1 className="text-5xl uppercase">Get In Touch</h1>
            <p className="text-lg g-font-1">
              We're here to help you find your dream property or answer any
              questions you may have. Simply fill out the enquiry form below,
              and our dedicated team will get back to you promptly. Your journey
              to exceptional real estate begins with a single message!
            </p>
            <div className="flex items-center justify-center w-full">
              <form className="flex flex-col w-1/2 gap-4 p-6 border-2 rounded-lg max-md:w-2/3 max-sm:w-5/6">
                <div>
                  <div className="block mb-2">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="block mb-2">
                    <Label htmlFor="enquiry" value="Your Enquiry" />
                  </div>
                  <Textarea
                    id="enquiry"
                    placeholder="Enter your enquiry..."
                    required
                    rows={4}
                  />
                </div>
                <button
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Send your enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
