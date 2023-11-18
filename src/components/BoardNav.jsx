function ElectionNav() {
  return (
    <nav className="flex h-[100px]">
      <div className="flex justify-end items-center gap-6 px-[135px] w-[50%] bg-brown font-bold">
        <h2 className="text-white text-[60px]">陳珍奶</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center  text-xl">
            得票率<span className="ml-6 text-base">57.13%</span>
            <div className="ml-2 w-36 h-4 bg-white rounded-[10px] overflow-hidden">
              <div className="w-[57.13%] h-full bg-brown-dark"></div>
            </div>
          </li>
          <li className="flex items-center  text-xl">
            得票率<span className="ml-6 text-base">8,170,231</span>
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
            得票率<span className="ml-6 text-base">5,522,119</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ElectionNav;
