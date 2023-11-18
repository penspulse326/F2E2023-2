import Board from "../components/Board";
import BoardNav from "../components/BoardNav";

function Dashboard() {
  return (
    <>
      <BoardNav></BoardNav>
      <div className="noisy-beige">
        <div className="bg-radiation px-20 py-[100px] bg-cover">
          <Board></Board>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
