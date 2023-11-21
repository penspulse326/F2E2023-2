import PropTypes from "prop-types";
import pathData from "../constants/city-path.json";
import cityResult from "../constants/city-result-2020.json";

function BoardMap({ city, district }) {
  const result = cityResult.filter((item) => item["行政區域"] !== "總計");

  return (
    <div className="col-span-5 col-start-4 mt-14 mb-10">
      <svg
        width="506"
        height="727"
        viewBox="0 0 506 727"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {result.map((item) => {
          const thisCity = item["行政區別"];
          const isTarget = thisCity === city;
          const winColor =
            item["陳珍奶"] > item["黃雞排"] ? "#CEBDAD" : "#F9D849";
          const seletedColor = isTarget ? winColor : "#DBDBDB";

          const fill = city ? seletedColor : winColor;

          return (
            <path
              id={thisCity}
              key={thisCity}
              className="duration-300 ciry-path"
              d={pathData[thisCity]}
              fill={fill}
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}
      </svg>
    </div>
  );
}

BoardMap.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default BoardMap;
