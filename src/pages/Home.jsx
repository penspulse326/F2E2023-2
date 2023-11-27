import { Link } from "react-router-dom";
import ImgDots from "../assets/bg-dots.png";
import ImgNumber2 from "../assets/number-2.svg";
import ImgNumber0 from "../assets/number-0.svg";
import ImgCardMilkTea from "../assets/card-milkTea.png";
import ImgCardFriedChicken from "../assets/card-friedChicken.png";
import ImgCharacterMilkTea from "../assets/character-milkTea.png";
import ImgCharacterFriedChicken from "../assets/character-friedChicken.png";
import ImgFlagsMilkTea from "../assets/bg-flags-milkTea.png";
import ImgFlagsFriedChicken from "../assets/bg-flags-friedChicken.png";

function Home() {
  return (
    <div className="noisy-beige relative flex flex-col items-center overflow-hidden">
      <img className="relative top-0 z-50 w-full" src={ImgDots} alt="bg-dots" />
      <ul className="flex gap-1 mt-[60px]">
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src={ImgNumber2} alt="number-2" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src={ImgNumber0} alt="number-0" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src={ImgNumber2} alt="number-0" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src={ImgNumber0} alt="number-0" />
        </li>
      </ul>
      <ul className="z-50 flex gap-4 mt-4 ">
        <li className="home-title-1 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          台
        </li>
        <li className="home-title-2 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          灣
        </li>
        <li className="home-title-3 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          總
        </li>
        <li className="home-title-4 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          統
        </li>
        <li className="home-title-5 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          大
        </li>
        <li className="home-title-6 noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          選
        </li>
      </ul>
      <ul className="z-50 flex gap-6 mt-[60px]">
        <li className="card-home relative flex flex-col justify-end items-center rounded-[50px] overflow-hidden">
          <img
            className="duration-300"
            src={ImgCardMilkTea}
            alt="card-milkTea"
          />
          <img
            className="character-image absolute origin-bottom duration-300"
            src={ImgCharacterMilkTea}
            alt="陳珍奶"
          />
        </li>
        <li className="card-home relative flex flex-col justify-end items-center rounded-[50px] overflow-hidden">
          <img
            className="duration-300"
            src={ImgCardFriedChicken}
            alt="card-friedChicken"
          />
          <img
            className="character-image absolute origin-bottom duration-300"
            src={ImgCharacterFriedChicken}
            alt="黃雞排"
          />
        </li>
      </ul>
      <ul>
        <li>
          <img
            className="flags-milk absolute left-0 w-[15%] duration-300"
            src={ImgFlagsMilkTea}
            alt="bg-flags-milkTea"
          />
        </li>
        <li>
          <img
            className="flags-milk absolute top-[200%] left-0 w-[15%] duration-300"
            src={ImgFlagsMilkTea}
            alt="bg-flags-milkTea"
          />
        </li>
        <li>
          <img
            className="flags-chicken absolute top-0 right-0 w-[15%]"
            src={ImgFlagsFriedChicken}
            alt="bg-flags-friedChicken"
          />
        </li>
        <li>
          <img
            className="flags-chicken absolute top-[200%] right-0 w-[15%]"
            src={ImgFlagsFriedChicken}
            alt="bg-flags-friedChicken"
          />
        </li>
      </ul>
      <div className="noisy-orange relative z-100 flex justify-end mt-[90px] px-7 py-6 w-full h-[100px]">
        <Link
          className="text-white text-[40px] font-bold hover:scale-110 duration-300"
          to="./dashboard"
        >
          進入總統大選開票地圖 {">>>"}
        </Link>
      </div>
    </div>
  );
}

export default Home;
