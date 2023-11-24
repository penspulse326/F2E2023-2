import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cityChartShape, voteChartShape } from "./Shapes";
import cityResult from "../constants/vote-2020.json";
import { formatVoteData, formatHistoryData } from "../utils/formatData";

const CityChart = ({ city, district }) => {
  const data = formatVoteData(city, district);

  return (
    <ResponsiveContainer width="75%" height="100%">
      <PieChart>
        <Pie
          activeIndex={[0, 1]}
          activeShape={cityChartShape}
          data={data}
          outerRadius={50}
          dataKey="value"
          startAngle={180}
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
  const total = cityResult[0];

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

  return (
    <>
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
    </>
  );
};

const HistoryChart = ({ city }) => {
  const data = formatHistoryData(city);

  const legendProps = {
    wrapperStyle: { top: "200px" },
    formatter: (value) => <span className="text-gray-80 text-sm">{value}</span>,
  };

  const barStyle = {
    data,
    width: 300,
    height: 300,
    margin: {
      top: 20,
      right: 30,
      left: 20,
    },
  };

  return (
    <ResponsiveContainer width="75%" height="100%">
      <BarChart {...barStyle}>
        <Tooltip
          cursor={{ fill: "white" }}
          formatter={(value) => `${value}%`}
        />
        <Legend {...legendProps} />
        <Bar dataKey="陳珍奶" stackId="a" fill=" #CEBDAD" barSize={32} />
        <Bar dataKey="黃雞排" stackId="a" fill="#F9D849" barSize={32} />
        <XAxis dataKey="name" tickFormatter={(value) => `${value}\n年`} />
      </BarChart>
    </ResponsiveContainer>
  );
};

function BoardChart({ city, district }) {
  return (
    <div className="relative z-50 col-span-4 col-start-9 flex flex-col h-[500px]">
      {city && (
        <p className="absolute -top-20 flex items-center mb-10 text-xl">
          您選取的是{" "}
          <span className="ml-2 text-pink-dark text-[32px] font-bold">
            {city}
          </span>
          <span className="ml-2 text-pink-dark text-[32px] font-bold">
            {district}
          </span>
        </p>
      )}
      <h3 className="px-4 text-xl border-l-[10px] border-pink">
        2020 總統大選得票率
      </h3>
      <CityChart city={city} district={district} />
      <h3 className="mt-6 px-4 text-xl border-l-[10px] border-pink">
        {city ? "歷史回顧" : "2020 總統大選投票率"}
      </h3>
      <div className="relative flex items-center w-full h-full">
        {city ? <HistoryChart city={city} /> : <VoteRateChart />}
      </div>
    </div>
  );
}

BoardChart.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

HistoryChart.propTypes = {
  city: PropTypes.string,
};

CityChart.propTypes = {
  city: PropTypes.string,
  district: PropTypes.string,
};

export default BoardChart;
