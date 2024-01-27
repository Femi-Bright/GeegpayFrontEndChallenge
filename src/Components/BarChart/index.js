import Amount from "./Amount";
import Month from "./Month";

const Chart = ({ data }) => {
  const arrayOfMonthObjects = Object.entries(data).map(
    ([month, { unitSold, worth }]) => ({
      month,
      unitSold,
      worth,
    })
  );

  const unitSoldArray = Object.values(data).map(
    (monthData) => monthData.unitSold
  );

  const highestValue = Math.max(...unitSoldArray);

  const highestAxisValue = Math.ceil(highestValue / 5) * 5;

  const axisArrayLength = highestAxisValue / 5 + 2;

  const axisArray = Array.from(
    { length: axisArrayLength },
    (_, index) => index * 5
  ).reverse();

  return (
    <div className="select-none">
      <div className="space-y-[10px]">
        {axisArray.map((axis) => (
          <Amount
            key={axis}
            amount={`${axis}.00`}
            invisible={axis % 10 !== 0}
          />
        ))}
      </div>
      <div className="ml-8 md:ml-[60px] flex justify-between max-w-full">
        {arrayOfMonthObjects.map((monthlyData) => (
          <Month
            key={monthlyData.month}
            month={monthlyData.month}
            amount={monthlyData.unitSold}
            worth={monthlyData.worth}
            isHighest={monthlyData.unitSold === highestAxisValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
