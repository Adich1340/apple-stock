import React from "react";
import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let date = payload[0].payload.Date;
    let open = Number(payload[0].payload.Open).toFixed(2);
    let close = Number(payload[0].payload.Close).toFixed(2);
    let range = Number(open - close).toFixed(2);
    return (
      <div>
        <p className="label">{`Date: ${date}`}</p>
        <p className="intro">{`Open: ${open}`}</p>
        <p className="intro">{`Close: ${close}`}</p>
        <p className="intro">{`Range: ${range}`}</p>
      </div>
    );
  }
  return null;
};

function Chart({ stockData }) {
  return (
    <div className="chart">
      <div className="chart-container">
        <ResponsiveContainer width="99%" height="80%">
          <LineChart
            width={1000}
            height={500}
            data={stockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="StartDate" allowDataOverflow={false} />
            <YAxis
              type="number"
              allowDecimals={true}
              allowDataOverflow={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="Open" stroke="#ff7300" dot={false} />
            <Line type="monotone" dataKey="Close" stroke="blue" dot={false} />

            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
