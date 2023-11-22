import Board from "../components/Board";
import BoardNav from "../components/BoardNav";

function Dashboard() {
  return (
    <div>
      <BoardNav></BoardNav>
      <div className="noisy-beige">
        <div className="bg-radiation px-20 py-[100px] bg-cover bg-center">
          <Board></Board>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
