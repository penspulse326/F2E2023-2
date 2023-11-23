import { useState } from "react";
import ImgBgMilkTea from "../assets/nav-milkTea.png";
import ImgBgMilkTeaLg from "../assets/nav-milkTea-lg.png";
import ImgMilkTea from "../assets/nav-character-milkTea.png";
import ImgBgFriedChicken from "../assets/nav-friedChicken.png";
import ImgBgFriedChickenLg from "../assets/nav-friedChicken-lg.png";
import ImgFriedChicken from "../assets/nav-character-friedChicken.png";

function ElectionNav() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const containerStyle = isMouseOn ? "h-[240px]" : "h-[100px]";
  const hoverTitleStyle = isMouseOn && "translate-y-[-500px]";
  const hoverBgStyle = isMouseOn && "translate-y-[-500px]";

  return (
    <nav
      className={`flex h-[100px] duration-700 ${containerStyle}`}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <div className="relative flex justify-center  gap-6 w-[50%] bg-brown font-bold overflow-hidden">
        <div className="absolute flex justify-center">
          <img
            className={`${hoverBgStyle} relative -top-10 duration-700 `}
            src={ImgBgMilkTea}
            alt="bg-icon-milkTea"
          />
          <img
            src={ImgBgMilkTeaLg}
            className={`${hoverBgStyle} absolute top-[500px] scale-105 duration-700`}
            alt="bg-icon-milkTea"
          />
          <img
            src={ImgMilkTea}
            className={`${hoverBgStyle} absolute top-[520px] left-40 duration-700`}
            alt="character-milkTea"
          />
        </div>
        <h2
          className={`${hoverTitleStyle} z-50 text-white text-[60px] duration-700`}
        >
          陳珍奶
        </h2>
        <ul className="relative self-center flex flex-col gap-3 duration-700">
          <li
            className={`${
              !isMouseOn && "hidden"
            } ${hoverTitleStyle} relative top-[500px]`}
          >
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
            className={`${hoverBgStyle} relative -top-10 duration-700 `}
            src={ImgBgFriedChicken}
            alt="bg-icon-friedChicken"
          />
          <img
            src={ImgBgFriedChickenLg}
            className={`${hoverBgStyle} absolute top-[480px] scale-[1.15] duration-700`}
            alt="bg-icon-friedChicken"
          />
          <img
            src={ImgFriedChicken}
            className={`${hoverBgStyle} absolute top-[520px] left-40 duration-700`}
            alt="character-friedChicken"
          />
        </div>
        <h2
          className={`${hoverTitleStyle} z-50 text-white text-[60px] duration-700`}
        >
          黃雞排
        </h2>
        <ul className="relative self-center flex flex-col gap-3 duration-700">
          <li
            className={`${
              !isMouseOn && "hidden"
            } ${hoverTitleStyle} relative top-[500px]`}
          >
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

export default ElectionNav;
