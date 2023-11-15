function Home() {
  return (
    <div className="noisy-beige relative flex flex-col items-center w-[100vw]">
      <img
        className="relative top-0 z-50"
        src="./src/assets/bg-dots.png"
        alt="bg-dots"
      />
      <ul className="flex gap-1 mt-[60px]">
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src="./src/assets/number-2.svg" alt="number-0" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src="./src/assets/number-0.svg" alt="number-0" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src="./src/assets/number-2.svg" alt="number-0" />
        </li>
        <li className="noisy-orange flex justify-center items-end pb-[22px] w-20 h-20 rounded-[10px]">
          <img src="./src/assets/number-0.svg" alt="number-0" />
        </li>
      </ul>
      <ul className="flex gap-4 mt-4">
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
        <li className="relative flex justify-center items-end">
          <img
            className="rounded-[50px]"
            src="./src/assets/card-milk.png"
            alt="bg-milk"
          />
          <img
            className="absolute hover:scale-105 origin-bottom duration-300"
            src="./src/assets/character-milk.png"
            alt="陳珍奶"
          />
        </li>
        <li>
          <img src="./src/assets/male.png" alt="黃雞排" />
        </li>
      </ul>
      <ul>
        <li>
          <img
            className="flags-milk absolute left-0 w-[15%] duration-300"
            src="./src/assets/bg-milk.png"
            alt="bg-milk-flags"
          />
        </li>
        <li>
          <img
            className="flags-milk absolute top-[200%] left-0 w-[15%] duration-300"
            src="./src/assets/bg-milk.png"
            alt="bg-milk-flags"
          />
        </li>
        <li>
          <img
            className="flags-chicken absolute top-0 right-0 w-[15%]"
            src="./src/assets/bg-chicken.png"
            alt="bg-chicken-flags"
          />
        </li>
        <li>
          <img
            className="flags-chicken absolute top-[200%] right-0 w-[15%]"
            src="./src/assets/bg-chicken.png"
            alt="bg-chicken-flags"
          />
        </li>
      </ul>
      <div className="noisy-orange relative z-100 flex justify-end mt-[90px] px-7 py-6 w-full h-[100px]">
        <button className="text-white text-[40px] font-bold hover:scale-110 origin-right duration-300">
          進入總統大選開票地圖 {">>>"}
        </button>
      </div>
    </div>
  );
}

export default Home;
