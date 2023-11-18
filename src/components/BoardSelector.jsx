import { useState } from "react";
import { CitySelector, DistrictSelector } from "./Selectors";

function BoardSelector() {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  console.log(city);
  console.log(district);

  return (
    <div className="col-span-4 col-start-5 self-center mt-10">
      <h3 className="text-2xl text-center font-bold tracking-wider">
        點選開票地圖，輕鬆掌握得票數據
      </h3>
      <ul className="flex justify-between gap-4 mt-6">
        <li className="w-full">
          <CitySelector setCity={setCity}></CitySelector>
        </li>
        <li className="w-full">
          <DistrictSelector
            city={city}
            setDistrict={setDistrict}
          ></DistrictSelector>
        </li>
      </ul>
    </div>
  );
}

export default BoardSelector;
