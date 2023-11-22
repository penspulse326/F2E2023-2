import { useState } from "react";
import ImgBgMilkTea from "../assets/nav-milkTea.png";
import ImgBgMilkTeaLg from "../assets/nav-milkTea-lg.png";

function ElectionNav() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const containerStyle = isMouseOn ? "h-[240px]" : "h-[100px]";
  const hoverTitleStyle = isMouseOn && "translate-y-[500px]";
  const hoverBgStyle = isMouseOn && "translate-y-[500px]";

  return (
    <nav
      className={`flex h-[100px] duration-700 ${containerStyle}`}
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
    >
      <div className="relative flex justify-center items-center gap-6 px-[135px] w-[50%] bg-brown font-bold overflow-hidden">
        <img
          className={`${hoverBgStyle} absolute duration-700 `}
          src={ImgBgMilkTea}
          alt="bg-icon-milkTea"
        />
        <img
          className={`${hoverBgStyle} absolute -top-[500px] duration-700 `}
          src={ImgBgMilkTeaLg}
          alt="bg-icon-milkTea"
        />
        <h2
          className={`${hoverTitleStyle} text-white text-[60px] duration-700`}
        >
          陳珍奶
        </h2>
        <ul className="flex flex-col gap-3">
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
      <div className="flex justify-start items-center gap-6 px-[135px] w-[50%] bg-yellow font-bold">
        <h2 className="text-white text-[60px] fontbold">黃雞排</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center  text-xl">
            得票率<span className="ml-6 text-base">38.61%</span>
            <div className="ml-2 w-36 h-4 bg-white rounded-[10px] overflow-hidden">
              <div className="w-[38.61%] h-full bg-brown-dark"></div>
            </div>
          </li>
          <li className="flex items-center  text-xl">
            得票數<span className="ml-6 text-base">5,522,119</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ElectionNav;
