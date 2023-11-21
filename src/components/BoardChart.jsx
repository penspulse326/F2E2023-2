import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import { cityChartShape, voteChartShape } from "./Shapes";
import cityResult from "../constants/city-result-2020.json";

const total = cityResult[0];
const data1 = Number(((total["黃雞排"] / total["有效票數"]) * 100).toFixed(2));
const data2 = Number(((total["陳珍奶"] / total["有效票數"]) * 100).toFixed(2));

const data = [
  { name: "黃雞排", value: data1, color: "#F9D849" },
  { name: "陳珍奶", value: data2, color: "#CEBDAD" },
];

const voteData = [
  {
    name: "投票率",
    value: total["投票數"] / total["選舉人數"],
    color: "#E49794",
  },
  {
    name: "未投票率",
    value: 1 - total["投票數"] / total["選舉人數"],
    color: "#999999",
  },
];

const CityChart = () => {
  return (
    <ResponsiveContainer width="75%" height="100%">
      <PieChart>
        <Pie
          activeIndex={[0, 1]}
          activeShape={cityChartShape}
          data={data}
          outerRadius={50}
          dataKey="value"
          startAngle={180} // 從 180 度開始
          endAngle={-180}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const VoteRateChart = () => {
  return (
    <div className="relative flex items-center w-full h-full">
      <ResponsiveContainer width="75%" height="100%">
        <PieChart>
          <Pie
            activeIndex={[0, 1]}
            activeShape={voteChartShape}
            data={voteData}
            outerRadius={50}
            dataKey="value"
            startAngle={180} // 從 180 度開始
            endAngle={-180}
          >
            {voteData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute right-10 tracking-widest">
        <p className="mb-2">投票數 {total["投票數"].toLocaleString()}</p>
        <p className="text-xs">
          有效票數 {`${total["有效票數"].toLocaleString()}`}
        </p>
        <p className="text-xs">
          無效票數 {`${total["無效票數"].toLocaleString()}`}
        </p>
      </div>
    </div>
  );
};

function BoardChart({ city, district }) {
  return (
    <div className="relative z-50 col-span-4 col-start-9 flex flex-col h-[500px]">
      {city && (
        <p className="absolute -top-20 flex items-center mb-10 text-xl">
          您選取的是{" "}
          <span className="ml-2 text-pink-dark text-[32px]">{city}</span>
          <span className="ml-2 text-pink-dark text-[32px]">{district}</span>
        </p>
      )}
      <h3 className="px-4 text-xl border-l-[10px] border-pink">
        2020 總統大選得票率
      </h3>
      <CityChart></CityChart>
      <h3 className="mt-6 px-4 text-xl border-l-[10px] border-pink">
        {city ? "歷史回顧" : "2020 總統大選投票率"}
      </h3>
      <VoteRateChart></VoteRateChart>
    </div>
  );
}

BoardChart.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default BoardChart;
