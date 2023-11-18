import PropTypes from "prop-types";
import pathData from "../constants/city-path.json";
import cityResult from "../constants/city-result-2020.json";

function BoardMap({ city, district }) {
  console.log(city, district);
  const result = cityResult.filter((item) => item["行政區域"] !== "總計");

  return (
    <div className="col-span-7 col-start-1 -mt-44">
      <svg
        id="map"
        width="100%"
        height="929"
        viewBox="0 0 718 929"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_336_34015)">
          {result.map((item) => {
            const thisCity = item["行政區別"];
            const winColor =
              item["陳珍奶"] > item["黃雞排"] ? "#CEBDAD" : "#F9D849";
            const isTarget = thisCity === city;
            const seletedColor = isTarget ? winColor : "#DBDBDB";

            const fill = city ? seletedColor : winColor;

            return (
              <path
                id={thisCity}
                key={thisCity}
                className="duration-300"
                d={pathData[thisCity]}
                fill={fill}
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </g>
        <defs>
          <clipPath id="clip0_336_34015">
            <rect width="718" height="929" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

BoardMap.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default BoardMap;
