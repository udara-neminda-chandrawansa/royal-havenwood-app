import { Button } from "@headlessui/react";

function HomeSection4() {
  return (
    <div className="h-[100dvh] flex items-start px-3 max-lg:h-fit max-[992px]:flex-col">
      <div className="flex flex-col gap-3 w-1/2 py-2 max-[992px]:w-full">
        <span className="g-font-2 text-xs tracking-widest text-gray-600 uppercase flex items-center gap-5">
          A Digital Experience
          <div className="w-[120px] border-t-[1px] border-t-gray-400"></div>
        </span>
        <span className="flex flex-col justify-between gap-8">
          <h1 className="uppercase text-5xl max-lg:text-4xl leading-snug w-fit">
            THE ONE APP YOU NEED FOR ALL YOUR PROPERTY NEEDS
          </h1>
          {/*big img (hidden after 992px, showen max-[992px])*/}
          <img
            className="hidden max-[992px]:flex"
            src="https://cdn.emaar.com/wp-content/uploads/2023/10/digital-experiance.png"
            alt="app"
          ></img>
          <p className="g-font-1 text-xl w-fit">
            Royal Havenwood One allows homeowners and tenants to fully manage their
            property from their phone anytime anywhere.
          </p>
          <span className="flex justify-between p-3 max-sm:flex-col max-sm:gap-6">
            <span className="flex flex-col gap-5">
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wrench"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z" />
                  </svg>
                </span>
                Construction updates papap
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </span>
                Ownership updates
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                  </svg>
                </span>
                Access card requests
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </span>
                Amenities booking
              </span>
            </span>
            <span className="flex flex-col gap-5">
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                    />
                  </svg>
                </span>
                Property related transfers
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </span>
                Move In/Out requests
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-credit-card-2-back-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z" />
                  </svg>
                </span>
                Online payments
              </span>
              <span className="flex items-center gap-3 g-font-1 text-xl">
                <span className="p-3 border-black border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                </span>
                ECM & Home services
              </span>
            </span>
          </span>
          {/*hr*/}
          <span className="border border-t-gray-500"></span>
          <span className="flex items-center gap-6">
            <img
              src="https://cdn.emaar.com/wp-content/uploads/2023/10/emaar-one.png"
              alt="app"
            ></img>
            <h1 className="text-3xl p-3 uppercase w-[300px] max-sm:text-2xl">
              Download Royal Havenwood One App
            </h1>
          </span>
          {/*app stores*/}
          <span className="flex gap-5">
            <Button>
              <img
                src="https://cdn.emaar.com/wp-content/uploads/2023/07/apple.png"
                alt="app store"
              ></img>
            </Button>
            <Button>
              <img
                src="https://cdn.emaar.com/wp-content/uploads/2023/07/google-play.png"
                alt="app store"
              ></img>
            </Button>
            <Button>
              <img
                src="https://cdn.emaar.com/wp-content/uploads/2023/07/Huawei-app-logo.png"
                alt="app store"
              ></img>
            </Button>
          </span>
        </span>
      </div>
      <div className="flex w-1/2 items-start h-full max-[992px]:hidden">
        <img
          src="https://cdn.emaar.com/wp-content/uploads/2023/10/digital-experiance.png"
          alt="app"
        ></img>
      </div>
    </div>
  );
}

export default HomeSection4;
