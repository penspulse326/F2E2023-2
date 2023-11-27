import { CityContextProvider } from "../contexts/CityContext";
import BoardNav from "../components/Board/BoardNav";
import BoardWrapper from "../components/Board";

function Dashboard() {
  return (
    <div className="noisy-beige">
      <BoardNav></BoardNav>
      <div className="bg-radiation px-20 py-[100px] bg-cover bg-center">
        <CityContextProvider>
          <BoardWrapper />
        </CityContextProvider>
      </div>
    </div>
  );
}

export default Dashboard;
