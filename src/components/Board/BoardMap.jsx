import { useState, useContext } from "react";
import CityContext from "../../contexts/CityContext";
import pathData from "../../constants/city-path.json";
import cityResult from "../../constants/vote-2020.json";
import MapTag from "../MapTag";

const MapTaiwan = () => {
  const result = cityResult.filter((item) => item["行政區別"] !== "總計");

  const { setCity } = useContext(CityContext);

  const [isHover, setIsHover] = useState(false);
  const [tagColor, setTagColor] = useState("#FFF");
  const [tagName, setTagName] = useState("");

  const handleMouseEnter = (name, color) => {
    setIsHover(true);
    setTagName(name);
    setTagColor(color);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setTagName("");
  };

  return (
    <>
      {isHover && <MapTag name={tagName} color={tagColor} />}
      <svg
        className="map-svg duration-300"
        width="500"
        height="750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {result.map((item) => {
          const thisCity = item["行政區別"];
          const path = pathData[thisCity].d;

          const isHoverCity = thisCity === tagName;

          const winColor =
            item["陳珍奶"] > item["黃雞排"] ? "#CEBDAD" : "#F9D849";
          const hoverColor = isHoverCity ? winColor : "#DBDBDB";

          const fill = isHover ? hoverColor : winColor;

          return (
            <path
              id={thisCity}
              key={thisCity}
              d={path}
              fill={fill}
              strokeLinecap="round"
              strokeLinejoin="round"
              onMouseEnter={() => handleMouseEnter(thisCity, winColor)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => setCity(thisCity)}
              className="map-svg stroke-white stroke-2 cursor-pointer duration-300"
            />
          );
        })}
      </svg>
    </>
  );
};

const MapCity = () => {
  const { city, district, setDistrict } = useContext(CityContext);

  const [isHover, setIsHover] = useState(false);
  const [tagColor, setTagColor] = useState("#FFF");
  const [tagName, setTagName] = useState("");

  const targetPaths = pathData[city].districts;
  const targetDatas = cityResult.filter((item) => item["行政區別"] === city)[0][
    "各區票數"
  ];

  const handleMouseEnter = (name, color) => {
    setTagColor(color);
    setIsHover(true);
    setTagName(name);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setTagName("");
  };

  return (
    <>
      {isHover && <MapTag name={tagName} color={tagColor} />}
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

          const winColor =
            target["陳珍奶"] > target["黃雞排"] ? "#CEBDAD" : "#F9D849";

          const isHoverDistrict = name === tagName;
          const isSelectedDistrict = name === district;

          const hoverColor =
            isHoverDistrict || isSelectedDistrict ? winColor : "#DBDBDB";

          const fill = isHover || district ? hoverColor : winColor;

          return (
            <path
              key={index + name}
              id={name}
              d={d}
              fill={fill}
              onMouseEnter={() => handleMouseEnter(name, winColor)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => setDistrict(name)}
              className="map-svg stroke-white stroke-1 cursor-pointer duration-300"
            />
          );
        })}
      </svg>
    </>
  );
};

function BoardMap() {
  const { city } = useContext(CityContext);

  // if city is not selected yet, start positoin will change because svg size
  const boardStyles = city
    ? "col-span-6 col-start-3 mt-14 mb-10"
    : "col-span-5 col-start-4 mt-14 mb-10";

  return (
    <div className={boardStyles}>{city ? <MapCity /> : <MapTaiwan />}</div>
  );
}

export default BoardMap;
