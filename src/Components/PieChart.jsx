import { PieChart as PC, Pie, Cell } from "recharts";

import PropTypes from "prop-types"; // ES6

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  //   index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = ({size}) => {
  let donated = JSON.parse(localStorage.getItem("donated") || "[]").length;
  const data = [
    { name: "Group A", value: (donated * 100) / 12 },
    { name: "Group B", value: ((12 - donated) * 100) / 12 },
  ];
  const COLORS = ["#FF444A", "#00C49F"];
  return (
    <PC width={size} height={size}>
      <Pie
        data={data}
        cx={size / 2}
        cy={size / 2}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={(size * 37.5) / 100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PC>
  );
};

PieChart.prototype = {
  size: PropTypes.number,
};

export default PieChart;
