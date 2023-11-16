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
    <div className="noisy-beige relative flex flex-col items-center">
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
      <ul className="flex gap-4 mt-4 hover:scale-105 duration-300">
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          台
        </li>
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          灣
        </li>
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          總
        </li>
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          統
        </li>
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          大
        </li>
        <li className="noisy-orange rounded-[30px] text-white text-[80px] px-[60px] py-4">
          選
        </li>
      </ul>
      <ul className="z-50 flex gap-6 mt-[60px]">
        <li className="relative flex flex-col justify-end items-center overflow-hidden">
          <img
            className="rounded-[50px]"
            src={ImgCardMilkTea}
            alt="card-milkTea"
          />
          <img
            className="character-image absolute hover:scale-105 origin-bottom duration-300"
            src={ImgCharacterMilkTea}
            alt="陳珍奶"
          />
          <h2 className="character-name noisy-orange absolute -top-20 text-white text-4xl duration-300">
            陳珍奶
          </h2>
        </li>
        <li className="relative flex flex-col justify-end items-center overflow-hidden">
          <img
            className="rounded-[50px]"
            src={ImgCardFriedChicken}
            alt="card-friedChicken"
          />
          <img
            className="character-image absolute hover:scale-105 origin-bottom duration-300"
            src={ImgCharacterFriedChicken}
            alt="黃雞排"
          />
          <h2 className="character-name noisy-orange absolute -top-20  text-white text-4xl duration-300">
            黃雞排
          </h2>
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
        <button className="text-white text-[40px] font-bold hover:scale-110 duration-300">
          進入總統大選開票地圖 {">>>"}
        </button>
      </div>
    </div>
  );
}

export default Home;
