import PropTypes from "prop-types";
import pathData from "../constants/city-path.json";
import cityResult from "../constants/vote-2020.json";

const MapTaiwan = ({ city, result }) => {
  return (
    <svg
      className="map-svg duration-300"
      width="500"
      height="750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {result.map((item) => {
        const thisCity = item["行政區別"];
        const isTargetCity = thisCity === city;

        const winColor =
          item["陳珍奶"] > item["黃雞排"] ? "#CEBDAD" : "#F9D849";
        const seletedColor = isTargetCity ? winColor : "#DBDBDB";

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
          />
        );
      })}
    </svg>
  );
};

const MapCity = ({ city, district }) => {
  const targetPaths = pathData[city].districts;
  const targetDatas = cityResult.filter((item) => item["行政區別"] === city)[0][
    "各區票數"
  ];

  return (
    <>
      <svg
        version="1.1"
        fill="none"
        width="100%"
        height="750"
        xmlns="http://www.w3.org/2000/svg"
      >
        {targetPaths.map(({ name, d }, index) => {
          const target = targetDatas.filter(
            (item) => item["鄉鎮市區"] === name
          )[0];

          const isTargetDistrict = name === district;

          const winColor =
            target["陳珍奶"] > target["黃雞排"] ? "#CEBDAD" : "#F9D849";
          const seletedColor = isTargetDistrict ? winColor : "#DBDBDB";

          const fill = district ? seletedColor : winColor;

          return (
            <g key={index + name}>
              <path
                id={name}
                fill={fill}
                stroke="#FDFEFE"
                strokeWidth="0.5"
                d={d}
                className="map-svg duration-1000"
              />
            </g>
          );
        })}
      </svg>
    </>
  );
};

function BoardMap({ city, district }) {
  const result = cityResult.filter((item) => item["行政區別"] !== "總計");

  // if city is not selected yet, start positoin will change because svg size
  const startPosition = city
    ? "col-span-6 col-start-3"
    : "col-span-5 col-start-4";

  return (
    <div className={`relative ${startPosition} mt-14 mb-10`}>
      {!city && <MapTaiwan city={city} result={result}></MapTaiwan>}
      {city && (
        <MapCity city={city} district={district} result={result}></MapCity>
      )}
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
