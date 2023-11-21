import PropTypes from "prop-types";
import pathData from "../constants/city-path.json";
import cityResult from "../constants/city-result-2020.json";

const MapTaiwan = ({ city, result }) => (
  <svg width="500" height="750" fill="none" xmlns="http://www.w3.org/2000/svg">
    {result.map((item) => {
      if (item["行政區別"] === "總計") return;

      const thisCity = item["行政區別"];
      const isTarget = thisCity === city;
      const winColor = item["陳珍奶"] > item["黃雞排"] ? "#CEBDAD" : "#F9D849";
      const seletedColor = isTarget ? winColor : "#DBDBDB";

      const fill = city ? seletedColor : winColor;
      const path = pathData[thisCity].d;

      return (
        <path
          id={thisCity}
          key={thisCity}
          d={path}
          fill={fill}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-300"
        />
      );
    })}
  </svg>
);

const MapCity = ({ city, district }) => {
  const target = pathData[city].districts;

  return (
    <svg
      version="1.1"
      fill="none"
      width="100%"
      height="750"
      xmlns="http://www.w3.org/2000/svg"
    >
      {target.map(({ name, d }) => (
        <path
          key={name}
          id={name}
          fill="#DCDBDB"
          stroke="#FDFEFE"
          strokeWidth="0.5"
          d={d}
        />
      ))}
    </svg>
  );
};

function BoardMap({ city, district }) {
  const result = cityResult.filter((item) => item["行政區域"] !== "總計");

  // if city is not selected yet, start positoin will change because svg size
  const startPosition = city
    ? "col-span-6 col-start-3"
    : "col-span-5 col-start-4";

  return (
    <div className={`${startPosition} mt-14 mb-10`}>
      {!city && <MapTaiwan city={city} result={result}></MapTaiwan>}
      {city && <MapCity city={city} district={district}></MapCity>}
    </div>
  );
}

BoardMap.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

MapTaiwan.propTypes = {
  city: PropTypes.string,
  result: PropTypes.array,
};

MapCity.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default BoardMap;
