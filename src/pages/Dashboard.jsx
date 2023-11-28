import { useState, useEffect } from "react";
import { CityContextProvider } from "../contexts/CityContext";
import BoardNav from "../components/Dashboard/BoardNav";
import BoardWrapper from "../components/Dashboard/BoardWrapper";
import Loading from "../components/Loading";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const blurStyle = isLoading && "blur-sm";

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);
  }, []);

  return (
    <>
      {isLoading && <Loading />}{" "}
      <div className={`${blurStyle} noisy-beige`}>
        <BoardNav></BoardNav>
        <div className="bg-radiation px-20 py-[100px] bg-cover bg-center">
          <CityContextProvider>
            <BoardWrapper />
          </CityContextProvider>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
