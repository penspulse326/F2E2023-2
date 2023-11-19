import { useState } from "react";
import BoardTitle from "./BoardTitle";
import BoardLinks from "./BoardLinks";
import BoardSelector from "./BoardSelector";
import BoardMap from "./BoardMap";

function Board() {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  return (
    <section className="relative px-20 py-[60px] bg-white rounded-[50px]">
      <div className="flex justify-center">
        <div className="flex-grow grid grid-cols-12 gap-6 max-w-[1296px]">
          <BoardTitle></BoardTitle>
          <BoardSelector
            city={city}
            setCity={setCity}
            setDistrict={setDistrict}
          ></BoardSelector>
          <BoardMap city={city} district={district}></BoardMap>
        </div>
        <BoardLinks></BoardLinks>
      </div>
    </section>
  );
}

export default Board;
