import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BoardLinks({ setCity, setDistrict }) {
  const handleClick = () => {
    setCity(null);
    setDistrict(null);
  };

  return (
    <ul className="absolute right-20 flex flex-col gap-6 font-bold">
      <li>
        <Link
          to="../"
          className="p-[10px] bg-white border border-gray-80 text-xl hover:text-pink hover:border-pink  duration-300"
        >
          回到首頁
        </Link>
      </li>
      <li>
        <button
          className="p-[10px] bg-white border border-gray-80 text-xl hover:text-pink hover:border-pink  duration-300"
          onClick={() => handleClick()}
        >
          全台地圖
        </button>
      </li>
    </ul>
  );
}

BoardLinks.propTypes = {
  setCity: PropTypes.func.isRequired,
  setDistrict: PropTypes.func.isRequired,
};

export default BoardLinks;
