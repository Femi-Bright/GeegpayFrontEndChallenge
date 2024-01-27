import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const LineChart = ({ data, isProfit }) => {
  const [statData, setStatData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatData(data);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);
  return (
    <Sparklines data={statData} width={100} height={24} margin={5}>
      <SparklinesLine color={isProfit ? "#66C87B" : "#ED544E"} />
    </Sparklines>
  );
};

export default LineChart;
