import Card from "./Card";
import { TrendDown, TrendUp } from "./Icons";
import LineChart from "./LineChart";

const StatsCard = ({ data, amount, title, Icon, isProfit }) => {
  return (
    <Card className="w-full md:w-[calc(50%-10px)] !px-4 space-y-[10px]">
      <div className="has-stat-sparkline flex justify-between">
        <div className="size-10 rounded-full border border-[#E6E6E6] dark:border-primary flex items-center justify-center">
          <Icon className="text-primary" />
        </div>
        <LineChart data={data} isProfit={isProfit} />
      </div>
      <div className="space-y-[5px]">
        <p className="text-[#898989] dark:text-gray-400 text-base md:text-lg font-medium">
          {title}
        </p>
        <p className="text-[#3A3F51] dark:text-white text-xl md:text-2xl font-semibold">
          {amount}
        </p>
      </div>

      <div className="xl:flex xl:items-center xl:justify-between space-x-2">
        <div
          className={`inline-flex items-center px-2 py-1 space-x-1 ${
            isProfit
              ? "bg-primary text-primary"
              : "bg-alert-error text-alert-error"
          }  bg-opacity-10 rounded-full`}
        >
          {isProfit ? <TrendUp /> : <TrendDown />}
          <span className="text-xs">23,5%</span>
        </div>
        <span className="font-[Inter] text-sm md:text-base text-[#606060] dark:text-gray-300">
          vs. previous month
        </span>
      </div>
    </Card>
  );
};

export default StatsCard;
