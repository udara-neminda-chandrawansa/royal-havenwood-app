import { useEffect, useCallback } from "react";
import { Checkbox, Field, Label } from "@headlessui/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { useState } from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  //
  // Carousel Logic
  //
  // Function to update all carousel items with new values
  const updateAllItems = useCallback((newValues) => {
    setItems(newValues); // Set the new array in state
  }, []); // Empty array because updateAllItems does not depend on any external value

  const handleCarousel = useCallback(
    (car_num) => {
      const carButtons = document.querySelectorAll(".car-btn"); // select all car-btn elements
      carButtons.forEach((button) => {
        button.style.background = "white"; // Change the background color for each button
      });
      document.getElementById(`car-btn-${car_num}`).style.background = "black"; // change color of the selected button
      // change carousel values in 'items' array
      switch (car_num) {
        case 1:
          // code
          updateAllItems([
            "Housing Constructions",
            "Crafting Homes with Precision",
            "bg-banner-1",
          ]);
          break;
        case 2:
          // code
          updateAllItems([
            "Building Constructions",
            "Solid Foundations for Your Projects",
            "bg-banner-2",
          ]);
          break;
        case 3:
          // code
          updateAllItems([
            "Hotel & Restaurant Constructions",
            "Luxury Spaces for Hospitality",
            "bg-banner-3",
          ]);
          break;
        case 4:
          // code
          updateAllItems([
            "Villa Constructions",
            "Elegant Villas, Tailored for You",
            "bg-banner-4",
          ]);
          break;
        case 5:
          // code
          updateAllItems([
            "Cabana Constructions",
            "Cozy Retreats by Design",
            "bg-banner-5",
          ]);
          break;
        case 6:
          // code
          updateAllItems([
            "Warehouse Constructions",
            "Efficient Storage, Built Right",
            "bg-banner-6",
          ]);
          break;
        default:
          // code
          alert("Error at Carousel: Wrong carousel number input!");
          break;
      }
    },
    [updateAllItems]
  ); // Add updateAllItems to the dependencies

  const [items, setItems] = useState([
    "Vida Residencies Club Point | Dubai Hills Estate",
    "Where your story unfolds",
    "bg-banner-1",
  ]); // carousel array

  // Automate the carousel switching logic
  useEffect(() => {
    let currentCarNum = 1; // Start with the first carousel item
    const totalCarItems = 6; // Total number of carousel items

    const carouselInterval = setInterval(() => {
      handleCarousel(currentCarNum); // Call the existing handleCarousel function
      currentCarNum++; // Move to the next carousel item
      if (currentCarNum > totalCarItems) {
        currentCarNum = 1; // Loop back to the first item
      }
    }, 5000); // Switch every 5 seconds (5000 milliseconds)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(carouselInterval);
  }, [handleCarousel]); // Include handleCarousel as a dependency

  //
  // Search Panel Logic
  //

  // properties
  const [chkProperties, setPropCheckboxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // for chk property types
  const togglePropCheckbox = (index) => {
    // for toggling property types
    setPropCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checked, i) => (i === index ? !checked : checked))
    );
  };
  const handlePropChkClear = () => {
    // to clear all chk boxes in properties panel
    setPropCheckboxes([false, false, false, false, false, false]);
  };
  const selectedPropCount = chkProperties.filter(Boolean).length; // Calculate the number of selected checkboxes

  // bedrooms
  const [chkBedrooms, setBedCheckboxes] = useState([
    false,
    false,
    false,
    false,
    false,
  ]); // for chk bedroom types
  const toggleBedCheckbox = (index) => {
    // for toggling bedroom types
    setBedCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checked, i) => (i === index ? !checked : checked))
    );
  };
  const handleBedChkClear = () => {
    // to clear all chk boxes in bedrooms panel
    setBedCheckboxes([false, false, false, false, false]);
  };
  const getBedroomSelectionMessage = () => {
    // to display selected bedroom options
    const [b1, b2, b3, b4, b5] = chkBedrooms;

    if (chkBedrooms.every((bedroom) => !bedroom)) {
      return "Any"; // No bedrooms selected (all false)
    }

    if (b1 && !b2 && !b3 && !b4 && !b5) return "1 bedroom";
    if (!b1 && b2 && !b3 && !b4 && !b5) return "2 bedrooms";
    if (!b1 && !b2 && b3 && !b4 && !b5) return "3 bedrooms";
    if (!b1 && !b2 && !b3 && b4 && !b5) return "4 bedrooms";
    if (!b1 && !b2 && !b3 && !b4 && b5) return "5+ bedrooms";

    if (b1 && b2 && !b3 && !b4 && !b5) return "1, 2 bedrooms";
    if (b1 && !b2 && b3 && !b4 && !b5) return "1, 3 bedrooms";
    if (b1 && !b2 && !b3 && b4 && !b5) return "1, 4 bedrooms";
    if (b1 && !b2 && !b3 && !b4 && b5) return "1, 5+ bedrooms";

    if (!b1 && b2 && b3 && !b4 && !b5) return "2, 3 bedrooms";
    if (!b1 && b2 && !b3 && b4 && !b5) return "2, 4 bedrooms";
    if (!b1 && b2 && !b3 && !b4 && b5) return "2, 5+ bedrooms";

    if (!b1 && !b2 && b3 && b4 && !b5) return "3, 4 bedrooms";
    if (!b1 && !b2 && b3 && !b4 && b5) return "3, 5+ bedrooms";

    if (b1 && !b2 && !b3 && b4 && b5) return "1, 4, 5+ bedrooms";

    if (!b1 && b2 && !b3 && b4 && b5) return "2, 4, 5+ bedrooms";

    if (!b1 && !b2 && !b3 && b4 && b5) return "4, 5+ bedrooms";

    if (b1 && b2 && b3 && !b4 && !b5) return "1, 2, 3 bedrooms";
    if (b1 && b2 && !b3 && b4 && !b5) return "1, 2, 4 bedrooms";
    if (b1 && b2 && !b3 && !b4 && b5) return "1, 2, 5+ bedrooms";

    if (b1 && !b2 && b3 && b4 && !b5) return "1, 3, 4 bedrooms";
    if (b1 && !b2 && b3 && !b4 && b5) return "1, 3, 5+ bedrooms";

    if (!b1 && b2 && b3 && b4 && !b5) return "2, 3, 4 bedrooms";
    if (!b1 && b2 && b3 && !b4 && b5) return "2, 3, 5+ bedrooms";

    if (!b1 && !b2 && b3 && b4 && b5) return "3, 4, 5+ bedrooms";

    if (b1 && b2 && b3 && b4 && !b5) return "1, 2, 3, 4 bedrooms";
    if (b1 && b2 && b3 && !b4 && b5) return "1, 2, 3, 5+ bedrooms";
    if (b1 && b2 && !b3 && b4 && b5) return "1, 2, 4, 5+ bedrooms";

    if (b1 && !b2 && b3 && b4 && b5) return "1, 3, 4, 5+ bedrooms";

    if (!b1 && b2 && b3 && b4 && b5) return "2, 3, 4, 5+ bedrooms";

    if (b1 && b2 && b3 && b4 && b5) return "1, 2, 3, 4, 5+ bedrooms";

    return "";
  };

  // price range
  const [priceRange, setPriceRange] = useState([0, 0]); // array for storing price range
  const handlePriceRangeClear = () => {
    // clear price ranges
    document.getElementById("sel-min-price").value = 0;
    document.getElementById("sel-max-price").value = 0;
    setPriceRange([0, 0]);
  };
  const handlePriceSelection = () => {
    // handle price range variations
    const minPrice = document.getElementById("sel-min-price").value;
    const maxPrice = document.getElementById("sel-max-price").value;
    setPriceRange([minPrice, maxPrice]);
  };

  // communities
  const [chkCommunities, setCommCheckboxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // for chk communities types
  const toggleCommCheckbox = (index) => {
    // for toggling communities types
    setCommCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checked, i) => (i === index ? !checked : checked))
    );
  };
  const handleCommChkClear = () => {
    // to clear all chk boxes in communities panel
    setCommCheckboxes([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  };
  const selectedCommCount = chkCommunities.filter(Boolean).length; // Calculate the number of selected checkboxes

  //
  // Return
  //
  return (
    <div
      className={`w-full flex flex-col justify-between p-1 h-[100vh] bg-cover ${items[2]} transition-all delay-75 text-white`}
    >
      <Nav nav_burger_color_css={"text-white"} />
      {/*shadow*/}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e33] to-transparent"></div>
      {/*carousel + banner*/}
      <div className="w-2/3 flex flex-col justify-between p-3 z-10 mt-12">
        <p className="uppercase px-3 py-1 border-[1px] border-solid border-white w-fit my-8 text-sm">
          Our Services
        </p>
        <span>
          <h1 className="text-5xl uppercase max-md:text-3xl max-sm:text-2xl">
            {items[0]}
          </h1>
          <p className="text-2xl g-font-1 capitalize max-md:text-xl max-sm:text-xs">
            {items[1]}
          </p>
        </span>
        <span className="mt-5">
          <Button displayText="Learn More" url="https://www.google.com" />
        </span>
      </div>
      <div>
        {/*search panel*/}
        <div className="w-full h-[100px] flex justify-center max-lg:hidden">
          <div className="w-[97%] bg-white rounded z-10 text-black flex items-center">
            <div className="w-1/5 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="uppercase text-xs tracking-widest">
                  Property Type
                </li>
                <li>
                  {selectedPropCount > 0
                    ? selectedPropCount + ` properties`
                    : "Any"}
                </li>
              </ul>
              <Popover className="relative">
                <PopoverButton>
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
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="shadow-md w-1/4 flex flex-wrap z-10 bg-white p-1 rounded select-none"
                >
                  {[
                    "House",
                    "Building",
                    "Hotel & Restaurant",
                    "Villa",
                    "Cabana",
                    "Warehouse",
                  ].map((label, index) => (
                    <Field
                      className="flex items-center gap-3 w-1/2 p-2"
                      key={label}
                    >
                      <Checkbox
                        checked={chkProperties[index]}
                        onChange={() => togglePropCheckbox(index)}
                        className="group block size-6 rounded border border-black bg-white data-[checked]:bg-yellow-600"
                      >
                        <svg
                          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Checkbox>
                      <Label className="text-sm g-font-2">{label}</Label>
                    </Field>
                  ))}
                  <span className="border-t-[1px] border-gray w-full"></span>
                  <span className="w-full bg-white h-[30px]">
                    <Button
                      onClick={handlePropChkClear}
                      displayText="Clear Selection"
                      noPadding={true}
                      width="fit"
                      theme="transparent"
                      extraClasses="text-xs text-blue-900 px-3"
                    />
                  </span>
                </PopoverPanel>
              </Popover>
            </div>
            <div className="border-l-gray-300 border-l-[1px] w-1/5 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="uppercase text-xs tracking-widest">Bedroom</li>
                <li>{getBedroomSelectionMessage()}</li>
              </ul>
              <Popover className="relative">
                <PopoverButton>
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
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="shadow-md w-1/4 flex flex-wrap z-10 bg-white p-1 rounded select-none"
                >
                  {[
                    "1 Bedroom",
                    "2 Bedrooms",
                    "3 Bedrooms",
                    "4 Bedrooms",
                    "5+ Bedrooms",
                  ].map((label, index) => (
                    <Field
                      className="flex items-center gap-3 w-1/2 p-2"
                      key={label}
                    >
                      <Checkbox
                        checked={chkBedrooms[index]}
                        onChange={() => toggleBedCheckbox(index)}
                        className="group block size-6 rounded border border-black bg-white data-[checked]:bg-yellow-600"
                      >
                        <svg
                          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Checkbox>
                      <Label className="text-sm g-font-2">{label}</Label>
                    </Field>
                  ))}
                  <span className="border-t-[1px] border-gray w-full"></span>
                  <span className="w-full bg-white h-[30px]">
                    <Button
                      onClick={handleBedChkClear}
                      displayText="Clear Selection"
                      noPadding={true}
                      width="fit"
                      theme="transparent"
                      extraClasses="text-xs text-blue-900 px-3"
                    />
                  </span>
                </PopoverPanel>
              </Popover>
            </div>
            <div className="border-l-gray-300 border-l-[1px] w-1/5 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="uppercase text-xs tracking-widest">
                  Price Range
                </li>
                <li>
                  {priceRange[0] === 0 && priceRange[1] === 0
                    ? `Any`
                    : priceRange[0] + " to " + priceRange[1]}
                </li>
              </ul>
              <Popover className="relative">
                <PopoverButton>
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
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="shadow-md w-1/4 flex flex-wrap z-10 bg-white p-1 rounded select-none"
                >
                  <span className="flex w-full justify-between items-center gap-1">
                    <span className="p-1 flex flex-col justify-center">
                      <label
                        htmlFor="sel-min-price"
                        className="uppercase w-full text-xs"
                      >
                        Min Price (LKR)
                      </label>
                      <select
                        value={priceRange[0]}
                        onInput={handlePriceSelection}
                        id="sel-min-price"
                        className="p-1 border outline-none"
                      >
                        <option value="0">0</option>
                        <option value="100000">100,000</option>
                        <option value="200000">200,000</option>
                        <option value="300000">300,000</option>
                        <option value="400000">400,000</option>
                        <option value="500000">500,000</option>
                        <option value="600000">600,000</option>
                        <option value="700000">700,000</option>
                        <option value="800000">800,000</option>
                        <option value="900000">900,000</option>
                        <option value="1000000">1,000,000</option>
                        <option value="1200000">1,200,000</option>
                        <option value="1400000">1,400,000</option>
                        <option value="1600000">1,600,000</option>
                        <option value="1800000">1,800,000</option>
                        <option value="2000000">2,000,000</option>
                        <option value="2200000">2,200,000</option>
                        <option value="2400000">2,400,000</option>
                        <option value="2600000">2,600,000</option>
                        <option value="2800000">2,800,000</option>
                        <option value="3000000">3,000,000</option>
                        <option value="3500000">3,500,000</option>
                        <option value="4000000">4,000,000</option>
                        <option value="4500000">4,500,000</option>
                        <option value="5000000">5,000,000</option>
                        <option value="5500000">5,500,000</option>
                        <option value="6000000">6,000,000</option>
                        <option value="6500000">6,500,000</option>
                        <option value="7000000">7,000,000</option>
                        <option value="7500000">7,500,000</option>
                        <option value="8000000">8,000,000</option>
                        <option value="8500000">8,500,000</option>
                        <option value="9000000">9,000,000</option>
                        <option value="9500000">9,500,000</option>
                        <option value="10000000">10,000,000</option>
                        <option value="12000000">12,000,000</option>
                        <option value="14000000">14,000,000</option>
                        <option value="16000000">16,000,000</option>
                        <option value="18000000">18,000,000</option>
                        <option value="20000000">20,000,000</option>
                        <option value="30000000">30,000,000</option>
                        <option value="40000000">40,000,000</option>
                        <option value="50000000">50,000,000</option>
                        <option value="60000000">60,000,000</option>
                        <option value="70000000">70,000,000</option>
                        <option value="80000000">80,000,000</option>
                        <option value="90000000">90,000,000</option>
                        <option value="100000000">100,000,000</option>
                      </select>
                    </span>
                    to
                    <span className="p-1 flex flex-col justify-center">
                      <label
                        htmlFor="sel-max-price"
                        className="uppercase w-full text-xs"
                      >
                        Max Price (LKR)
                      </label>
                      <select
                        value={priceRange[1]}
                        onInput={handlePriceSelection}
                        id="sel-max-price"
                        className="p-1 border outline-none"
                      >
                        <option value="0">0</option>
                        <option value="100000">100,000</option>
                        <option value="200000">200,000</option>
                        <option value="300000">300,000</option>
                        <option value="400000">400,000</option>
                        <option value="500000">500,000</option>
                        <option value="600000">600,000</option>
                        <option value="700000">700,000</option>
                        <option value="800000">800,000</option>
                        <option value="900000">900,000</option>
                        <option value="1000000">1,000,000</option>
                        <option value="1200000">1,200,000</option>
                        <option value="1400000">1,400,000</option>
                        <option value="1600000">1,600,000</option>
                        <option value="1800000">1,800,000</option>
                        <option value="2000000">2,000,000</option>
                        <option value="2200000">2,200,000</option>
                        <option value="2400000">2,400,000</option>
                        <option value="2600000">2,600,000</option>
                        <option value="2800000">2,800,000</option>
                        <option value="3000000">3,000,000</option>
                        <option value="3500000">3,500,000</option>
                        <option value="4000000">4,000,000</option>
                        <option value="4500000">4,500,000</option>
                        <option value="5000000">5,000,000</option>
                        <option value="5500000">5,500,000</option>
                        <option value="6000000">6,000,000</option>
                        <option value="6500000">6,500,000</option>
                        <option value="7000000">7,000,000</option>
                        <option value="7500000">7,500,000</option>
                        <option value="8000000">8,000,000</option>
                        <option value="8500000">8,500,000</option>
                        <option value="9000000">9,000,000</option>
                        <option value="9500000">9,500,000</option>
                        <option value="10000000">10,000,000</option>
                        <option value="12000000">12,000,000</option>
                        <option value="14000000">14,000,000</option>
                        <option value="16000000">16,000,000</option>
                        <option value="18000000">18,000,000</option>
                        <option value="20000000">20,000,000</option>
                        <option value="30000000">30,000,000</option>
                        <option value="40000000">40,000,000</option>
                        <option value="50000000">50,000,000</option>
                        <option value="60000000">60,000,000</option>
                        <option value="70000000">70,000,000</option>
                        <option value="80000000">80,000,000</option>
                        <option value="90000000">90,000,000</option>
                        <option value="100000000">100,000,000</option>
                      </select>
                    </span>
                  </span>
                  <span className="border-t-[1px] border-gray w-full"></span>
                  <span className="w-full bg-white h-[30px]">
                    <Button
                      onClick={handlePriceRangeClear}
                      displayText="Clear Selection"
                      noPadding={true}
                      width="fit"
                      theme="transparent"
                      extraClasses="text-xs text-blue-900 px-3"
                    />
                  </span>
                </PopoverPanel>
              </Popover>
            </div>
            <div className="border-l-gray-300 border-l-[1px] w-1/5 h-[80%] z-20 flex justify-around items-center">
              <ul>
                <li className="uppercase text-xs tracking-widest">
                  Communities
                </li>
                <li>
                  {selectedCommCount > 0
                    ? selectedCommCount + ` communities`
                    : "All Communities"}
                </li>
              </ul>
              <Popover className="relative">
                <PopoverButton>
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
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="shadow-md w-full flex flex-col z-10 bg-white p-1 rounded select-none"
                >
                  <span className="flex">
                    {/* Featured Community */}
                    <span className="w-1/3">
                      <p className="uppercase text-xs text-gray-500 tracking-widest g-font-1 p-3">
                        Featured Community
                      </p>
                      {[
                        "Community 1",
                        "Community 2",
                        "Community 3",
                        "Community 4",
                      ].map((label, index) => (
                        <Field
                          className="flex items-center gap-3 w-1/2 p-2"
                          key={label}
                        >
                          <Checkbox
                            checked={chkCommunities[index]}
                            onChange={() => toggleCommCheckbox(index)}
                            className="group block size-6 rounded border border-black bg-white data-[checked]:bg-yellow-600"
                          >
                            <svg
                              className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Checkbox>
                          <Label className="text-sm g-font-2">{label}</Label>
                        </Field>
                      ))}
                    </span>
                    {/* More Communities */}
                    <span className="w-2/3">
                      <p className="uppercase text-xs text-gray-500 tracking-widest g-font-1 p-3">
                        More Communities
                      </p>
                      <span className="flex">
                        {["Community 5", "Community 6"].map((label, index) => (
                          <Field
                            className="flex items-center gap-3 w-fit p-2"
                            key={label}
                          >
                            <Checkbox
                              checked={chkCommunities[index + 8]} // adjust the index to match the original array
                              onChange={() => toggleCommCheckbox(index + 8)} // adjust index for toggle
                              className="group block size-6 rounded border border-black bg-white data-[checked]:bg-yellow-600"
                            >
                              <svg
                                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Checkbox>
                            <Label className="text-sm g-font-2">{label}</Label>
                          </Field>
                        ))}
                      </span>
                    </span>
                  </span>
                  <span className="border-t-[1px] border-gray w-full"></span>
                  <span className="w-full bg-white h-[30px]">
                    <Button
                      onClick={handleCommChkClear}
                      displayText="Clear Selection"
                      noPadding={true}
                      width="fit"
                      theme="transparent"
                      extraClasses="text-xs text-blue-900 px-3"
                    />
                  </span>
                </PopoverPanel>
              </Popover>
            </div>
            <div className="border-l-gray-300 border-l-[1px] w-1/5 h-[80%] z-20 flex justify-around items-center">
              <Button
                displayText="Search Properties"
                theme="transparent"
                extraClasses="bg-gray-400 text-white text-xs"
              />
            </div>
          </div>
        </div>
        {/*carousel buttons*/}
        <div className="h-[50px] flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div
              className="bg-black h-4 w-4 rounded z-10 car-btn"
              id="car-btn-1"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(1)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="bg-white h-4 w-4 rounded z-10 car-btn"
              id="car-btn-2"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(2)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="bg-white h-4 w-4 rounded z-10 car-btn"
              id="car-btn-3"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(3)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="bg-white h-4 w-4 rounded z-10 car-btn"
              id="car-btn-4"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(4)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="bg-white h-4 w-4 rounded z-10 car-btn"
              id="car-btn-5"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(5)}
                width="full"
                noPadding={true}
              />
            </div>
            <div
              className="bg-white h-4 w-4 rounded z-10 car-btn"
              id="car-btn-6"
            >
              <Button
                theme="transparent"
                onClick={() => handleCarousel(6)}
                width="full"
                noPadding={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
