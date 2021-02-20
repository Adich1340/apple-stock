import React, { useEffect, useState } from "react";
import TimestampTab from "./components/TimestampTab";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [timestamp, setTimestamp] = useState({
    period: 1,
    precision: "Minutes",
  });
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const { period, precision } = timestamp;
    const fetchData = () => {
      fetch(
        `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
      )
        .then((response) => response.json())
        .then((transformedData) => setStockData(transformedData));
    };

    fetchData();
  }, [timestamp]);

  const handleOnClick = (e) => {
    setTimestamp(e);
  };

  return (
    <div className="App">
      <TimestampTab handleOnClick={handleOnClick} />
      <Chart stockData={stockData} />
    </div>
  );
}

export default App;
