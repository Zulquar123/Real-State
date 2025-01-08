
import leftArrow from "../assets/left_arrow.svg";
import rightArrow from "../assets/right_arrow.svg";

export default function Project() {
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

      <div>
        <div></div>
      </div>
    </div>
  );
}
