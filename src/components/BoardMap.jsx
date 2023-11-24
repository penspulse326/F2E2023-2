import PropTypes from "prop-types";
import pathData from "../constants/city-path.json";
import cityResult from "../constants/vote-2020.json";
import { useState, useEffect } from "react";

const MapTag = ({ name, color }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: position.x - 75,
        top: position.y - 235,
        background: color,
      }}
      className="absolute px-2 py-1 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] shadow-md border border-white"
    >
      {name}
    </div>
  );
};

const MapTaiwan = ({ result, setCity }) => {
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

const MapCity = ({ city, district, setDistrict }) => {
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

function BoardMap({ city, district, setCity, setDistrict }) {
  const result = cityResult.filter((item) => item["行政區別"] !== "總計");

  // if city is not selected yet, start positoin will change because svg size
  const startPosition = city
    ? "col-span-6 col-start-3"
    : "col-span-5 col-start-4";

  return (
    <div className={`${startPosition} mt-14 mb-10`}>
      {!city && (
        <MapTaiwan city={city} result={result} setCity={setCity}></MapTaiwan>
      )}
      {city && (
        <MapCity
          city={city}
          district={district}
          setDistrict={setDistrict}
        ></MapCity>
      )}
    </div>
  );
}

BoardMap.propTypes = {
  city: PropTypes.string,
  setCity: PropTypes.func,
  district: PropTypes.string,
  setDistrict: PropTypes.func,
};

MapTaiwan.propTypes = {
  setCity: PropTypes.func,
  result: PropTypes.array,
};

MapCity.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
  setDistrict: PropTypes.func,
};

MapTag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default BoardMap;
