import BoardTitle from "./BoardTitle";
import BoardLinks from "./BoardLinks";
import BoardSelector from "./BoardSelector";

function Board() {
  return (
    <section className="relative px-20 py-[60px] bg-white rounded-[50px]">
      <div className="flex justify-center">
        <div className="flex-grow grid grid-cols-12 gap-6 max-w-[1296px]">
          <BoardTitle></BoardTitle>
          <BoardSelector></BoardSelector>
        </div>
        <BoardLinks></BoardLinks>
      </div>
    </section>
  );
}

export default Board;
