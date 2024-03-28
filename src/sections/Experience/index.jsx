import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/bebe_platform_home.png";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div className="">
      <div className=" text-primaryAccent font-medium">Experience</div>

      <div
        className={`grid grid-cols-[25%_75%]  rounded-md px-2 py-6 transition-all${
          isMouseEnter["exp1"] ? " bg-primaryBase" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ exp1: true })}
        onMouseLeave={() => setIsMouseEnter({ exp1: false })}
      >
        <div>
          <span
            className={` text-sm ${isMouseEnter ? "text-primaryAccent" : ""}`}
          >
            2022-2023
          </span>
          <div>
            <img
              src={picExp}
              className="w-5/6 rounded-md border-2 border-primarySubcontent"
            ></img>
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={` ${isMouseEnter["exp1"] ? "text-primaryAccent" : ""}`}
          >
            Online Fitness Platform
            <FontAwesomeIcon
              className={`text-xs -rotate-45 duration-300 ease-out ${
                isMouseEnter["exp1"] ? " translate-x-1 -translate-y-1" : ""
              }`}
              icon={faArrowRight}
            />
          </div>
          <a href="https://fit.bebefitroutine.com" target="_blank">
            <FontAwesomeIcon className="mr-2" icon={faWindowMaximize} />
            <span>https://fit.bebefitroutine.com</span>
          </a>
          <div>
            This demo project is based on EdRoh's tutorial video on Youtube. I
            have fixed some bugs and added several features.
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp1"] ? "text-primaryTitle" : ""
                }`}
              >
                ReactJS
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp1"] ? "text-primaryTitle" : ""
                }`}
              >
                Redux
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp1"] ? "text-primaryTitle" : ""
                }`}
              >
                NodeJS
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp1"] ? "text-primaryTitle" : ""
                }`}
              >
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-[25%_75%]  rounded-md px-2 py-6 transition-all${
          isMouseEnter["exp2"] ? " bg-primaryBase" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ exp2: true })}
        onMouseLeave={() => setIsMouseEnter({ exp2: false })}
      >
        <div>
          <span
            className={` text-sm ${isMouseEnter ? "text-primaryAccent" : ""}`}
          >
            2022-2023
          </span>
          <div>
            <img
              src={picExp}
              className="w-5/6 rounded-md border-2 border-primarySubcontent"
            ></img>
          </div>
        </div>
        <div className="grid gap-y-4">
          <div
            className={` ${isMouseEnter["exp2"] ? "text-primaryAccent" : ""}`}
          >
            Online Fitness Platform
            <FontAwesomeIcon
              className={`text-xs -rotate-45 duration-300 ease-out ${
                isMouseEnter["exp2"] ? " translate-x-1 -translate-y-1" : ""
              }`}
              icon={faArrowRight}
            />
          </div>
          <a href="https://fit.bebefitroutine.com" target="_blank">
            <FontAwesomeIcon className="mr-2" icon={faWindowMaximize} />
            <span>https://fit.bebefitroutine.com</span>
          </a>
          <div>
            This demo project is based on EdRoh's tutorial video on Youtube. I
            have fixed some bugs and added several features.
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp2"] ? "text-primaryTitle" : ""
                }`}
              >
                ReactJS
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp2"] ? "text-primaryTitle" : ""
                }`}
              >
                Redux
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp2"] ? "text-primaryTitle" : ""
                }`}
              >
                NodeJS
              </div>
              <div
                className={`bg-primarySubcontent px-2 py-1 rounded-md ${
                  isMouseEnter["exp2"] ? "text-primaryTitle" : ""
                }`}
              >
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
