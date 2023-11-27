import { useContext } from "react";
import { CitySelector, DistrictSelector } from "../Selectors";
import CityContext from "../../contexts/CityContext";

function BoardSelector() {
  const { city, setCity, district, setDistrict } = useContext(CityContext);

  return (
    <div className="col-span-4 col-start-5 self-center mt-8">
      <h3 className="text-2xl text-center font-bold tracking-wider">
        點選開票地圖，輕鬆掌握得票數據
      </h3>
      <ul className="flex justify-between gap-4 mt-6">
        <li className="w-full">
          <CitySelector
            city={city}
            setCity={setCity}
            setDistrict={setDistrict}
          />
        </li>
        <li className="w-full">
          <DistrictSelector
            city={city}
            district={district}
            setDistrict={setDistrict}
          />
        </li>
      </ul>
    </div>
  );
}

export default BoardSelector;
