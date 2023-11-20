import { Link } from "react-router-dom";

function BoardLinks() {
  return (
    <ul className="absolute right-20 flex flex-col gap-6 font-bold">
      <li>
        <Link
          to="../"
          className="p-[10px] bg-white border border-gray-80 text-xl hover:bg-gray-80 hover:text-white duration-300"
        >
          回到首頁
        </Link>
      </li>
      <li>
        <button className="p-[10px] bg-white border border-gray-80 text-xl hover:bg-gray-80 hover:text-white duration-300">
          全台地圖
        </button>
      </li>
    </ul>
  );
}

export default BoardLinks;
