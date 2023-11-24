import { useState } from "react";
import BoardTitle from "./BoardTitle";
import BoardLinks from "./BoardLinks";
import BoardSelector from "./BoardSelector";
import BoardMap from "./BoardMap";
import BoardChart from "./BoardChart";

function Board() {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  return (
    <section className="relative px-20 py-[60px] bg-white rounded-[50px]">
      <div className="flex justify-center">
        <div className="flex-grow grid grid-cols-12 gap-6 max-w-[1296px] items-center">
          <BoardTitle />
          <BoardSelector
            city={city}
            setCity={setCity}
            district={district}
            setDistrict={setDistrict}
          />
          <BoardMap
            city={city}
            setCity={setCity}
            district={district}
            setDistrict={setDistrict}
          />
          <BoardChart city={city} district={district} />
        </div>
        <BoardLinks setCity={setCity} setDistrict={setDistrict} />
      </div>
    </section>
  );
}

export default Board;
