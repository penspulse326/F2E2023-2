import { useState } from "react";
import {
  ImgBgMilkTea,
  ImgBgMilkTeaLg,
  ImgMilkTea,
  ImgBgFriedChicken,
  ImgBgFriedChickenLg,
  ImgFriedChicken,
} from "../ImgExporter";

function BoardNav() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const containerStyle = isMouseOn ? "h-[240px]" : "h-[100px]";
  const hoverStyle = isMouseOn && "translate-y-[-500px]";
  const hiddenStyle = !isMouseOn && "hidden";

  return (
    <nav
      className={`flex h-[100px] duration-700 ${containerStyle}`}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <div className="relative flex justify-center gap-6 w-[50%] bg-brown font-bold overflow-hidden">
        <div className="absolute flex justify-center">
          <img
            className={`${hoverStyle} relative -top-10 duration-700 `}
            src={ImgBgMilkTea}
            alt="bg-icon-milkTea"
          />
          <img
            src={ImgBgMilkTeaLg}
            className={`${hoverStyle} absolute top-[500px] scale-105 duration-700`}
            alt="bg-icon-milkTea"
          />
          <img
            src={ImgMilkTea}
            className={`${hoverStyle} absolute top-[520px] left-40 duration-700`}
            alt="character-milkTea"
          />
        </div>
        <h2
          className={`${hoverStyle} z-50 text-white text-[60px] duration-700`}
        >
          陳珍奶
        </h2>
        <ul className="relative self-center flex flex-col gap-3 duration-700">
          <li className={`${hiddenStyle} ${hoverStyle} relative top-[500px]`}>
            <h2 className="text-white text-[60px] duration-700">陳珍奶</h2>
          </li>
          <li className="flex items-center  text-xl">
            得票率<span className="ml-6 text-base">57.13%</span>
            <div className="ml-2 w-36 h-4 bg-white rounded-[10px] overflow-hidden">
              <div className="w-[57.13%] h-full bg-brown-dark"></div>
            </div>
          </li>
          <li className="flex items-center  text-xl">
            得票數<span className="ml-6 text-base">8,170,231</span>
          </li>
        </ul>
      </div>
      <div className="relative flex justify-center gap-6 w-[50%] bg-yellow font-bold overflow-hidden">
        <div className="absolute flex justify-center">
          <img
            className={`${hoverStyle} relative -top-10 duration-700 `}
            src={ImgBgFriedChicken}
            alt="bg-icon-friedChicken"
          />
          <img
            src={ImgBgFriedChickenLg}
            className={`${hoverStyle} absolute top-[480px] scale-[1.15] duration-700`}
            alt="bg-icon-friedChicken"
          />
          <img
            src={ImgFriedChicken}
            className={`${hoverStyle} absolute top-[520px] left-40 duration-700`}
            alt="character-friedChicken"
          />
        </div>
        <h2
          className={`${hoverStyle} z-50 text-white text-[60px] duration-700`}
        >
          黃雞排
        </h2>
        <ul className="relative self-center flex flex-col gap-3 duration-700">
          <li className={`${hiddenStyle} ${hoverStyle} relative top-[500px]`}>
            <h2 className="text-white text-[60px] duration-700">黃雞排</h2>
          </li>
          <li className="flex items-center text-xl duration-700">
            得票率<span className="ml-6 text-base">38.61%</span>
            <div className="ml-2 w-36 h-4 bg-white rounded-[10px] overflow-hidden">
              <div className="w-[38.61%] h-full bg-brown-dark"></div>
            </div>
          </li>
          <li className="flex items-center text-xl duration-700">
            得票數<span className="ml-6 text-base">5,522,119</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BoardNav;
