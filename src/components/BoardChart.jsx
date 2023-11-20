import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import cityResult from "../constants/city-result-2020.json";

const total = cityResult[0];
const data1 = Number(((total["黃雞排"] / total["有效票數"]) * 100).toFixed(2));
const data2 = Number(((total["陳珍奶"] / total["有效票數"]) * 100).toFixed(2));

const data = [
  { name: "黃雞排", value: data1, color: "#F9D849" },
  { name: "陳珍奶", value: data2, color: "#CEBDAD" },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
    name,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 2) * cos;
  const sy = cy + (outerRadius + 2) * sin;
  const mx = cx + (outerRadius + 25) * cos;
  const my = cy + (outerRadius + 25) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="white"
        strokeWidth="2"
      />
      <path d={`M${sx},${sy}L${mx},${my}`} stroke="#666666" />
      <text
        x={ex}
        y={ey + sin * 3}
        textAnchor={textAnchor}
        fill="#666666"
        fontSize={14}
      >
        {`${name} ${value}%`}
      </text>
    </g>
  );
};

const CityChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={200}>
        <Pie
          activeIndex={[0, 1]}
          activeShape={renderActiveShape}
          data={data}
          outerRadius={50}
          stroke="#000000"
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
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={200}>
        <Pie
          activeIndex={[0, 1]}
          activeShape={renderActiveShape}
          data={data}
          outerRadius={50}
          stroke="#000000"
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

function BoardChart() {
  return (
    <div className="z-50 col-span-4 col-start-9 flex flex-col gap-6 h-[500px]">
      <h3 className="px-4 text-xl border-l-[10px] border-pink">
        2020 總統大選得票率
      </h3>
      <CityChart></CityChart>
      <h3 className="px-4 text-xl border-l-[10px] border-pink">
        2020 總統大選投票率
      </h3>
      <VoteRateChart></VoteRateChart>
    </div>
  );
}

export default BoardChart;
