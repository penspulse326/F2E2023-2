import BoardTitle from "./BoardTitle";
import BoardSelector from "./BoardSelector";
import BoardLinks from "./BoardLinks";
import BoardMap from "./BoardMap";
import BoardChart from "./BoardChart";

export default function BoardWrapper() {
  return (
    <section className="relative px-20 py-[60px] bg-white rounded-[50px]">
      <div className="flex justify-center">
        <div className="flex-grow grid grid-cols-12 gap-6 max-w-[1296px] items-center">
          <BoardTitle />
          <BoardSelector />
          <BoardMap />
          <BoardChart />
        </div>
        <BoardLinks />
      </div>
    </section>
  );
}
