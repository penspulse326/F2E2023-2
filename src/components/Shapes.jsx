import { Sector } from "recharts";

export const cityChartShape = (props) => {
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
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 2) * cos;
  const sy = cy + (outerRadius + 2) * sin;
  const mx = cx + (outerRadius + 15) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my + (cos >= 0 ? 1 * 20 : -1 * 10);
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g className="custom-g">
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
        x={ex - cos * 60}
        y={ey}
        textAnchor={textAnchor}
        fill="#666666"
        fontSize={14}
      >
        {`${name} ${value}%`}
      </text>
    </g>
  );
};

export const voteChartShape = (props) => {
  const { payload, cx, cy, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g className="custom-g">
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#333333"
        fontSize={14}
      >
        {payload.name === "投票率" && `${(payload.value * 100).toFixed(1)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius - 20}
        outerRadius={outerRadius}
        fill={fill}
      />
    </g>
  );
};
