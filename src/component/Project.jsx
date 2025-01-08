import { useEffect, useState } from "react";
import leftArrow from "../assets/left_arrow.svg";
import rightArrow from "../assets/right_arrow.svg";

export default function Project() {
  const [ProjectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("ProjectData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjectData(data);
      });
  }, []);
  return (
    <div
      className="container py-4 px-6 pt-20 mx-auto my-20 md:px-20 lg:px-32 w-full overflow-hidden "
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className=" text-center text-gray-500 mx-auto mb-8 max-w-80 ">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* {Slider Buttons} */}
      <div className="flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-200 rounded mr-2">
          <img src={leftArrow} alt="Previous" aria-label="Previous Project" />
        </button>
        <button className="p-3 bg-gray-200 rounded mr-2">
          <img src={rightArrow} alt="Next" aria-label="Next Project" />
        </button>
      </div>

      {/* Project-Slider-Container */}

      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {ProjectData.map((data, index) => (
            <div className="relative flex-shrink-0 w-full sm:w-1/4" key={index}>
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className=" inline-block shadow-md bg-white w-3/4  px-4 py-2 ">
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    {data.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {data.price} <span> </span>
                    {data.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
