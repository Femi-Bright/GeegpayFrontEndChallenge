import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import { BoxCheck, Cart, Coin, Rotate3D } from "./Components/Icons";
import Chart from "./Components/BarChart";
import TableRow from "./Components/TableRow";
import StatsCard from "./Components/StatsCard";
import NewPlatformItem from "./Components/NewPlatformItem";
import MyDatePicker from "./Components/Header/MyDatePicker";
import CustomSelect from "./Components/CustomSelect";

const monthlySales = {
  Jan: {
    unitSold: 15,
    worth: "5,000",
  },
  Feb: {
    unitSold: 22,
    worth: "78,000",
  },
  Mar: {
    unitSold: 7,
    worth: "2,000",
  },
  Apr: {
    unitSold: 35,
    worth: "34,000",
  },
  May: {
    unitSold: 45,
    worth: "45,000",
  },
  Jun: {
    unitSold: 15,
    worth: "12,000",
  },
  Jul: {
    unitSold: 32,
    worth: "51,000",
  },
  Aug: {
    unitSold: 28,
    worth: "1,000",
  },
  Sep: {
    unitSold: 38,
    worth: "7,500",
  },
  Oct: {
    unitSold: 30,
    worth: "16,000",
  },
  Nov: {
    unitSold: 35,
    worth: "7,000",
  },
  Dec: {
    unitSold: 15,
    worth: "8000",
  },
};
const weeklySales = {
  w1: {
    unitSold: 10,
    worth: "8000",
  },
  w2: {
    unitSold: 40,
    worth: "5,000",
  },
  w3: {
    unitSold: 20,
    worth: "2,000",
  },
  w4: {
    unitSold: 30,
    worth: "35,000",
  },
  w5: {
    unitSold: 32,
    worth: "51,000",
  },
  w6: {
    unitSold: 38,
    worth: "7,500",
  },
  w7: {
    unitSold: 35,
    worth: "7,000",
  },
  w8: {
    unitSold: 45,
    worth: "35,000",
  },
  w9: {
    unitSold: 32,
    worth: "51,000",
  },
};

const lastOrders = [
  {
    id: 1,
    avatar: require("./Asset/avatars/Marcus Bergson.jpg"),
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "80,000",
    status: "Paid",
  },
  {
    id: 2,
    avatar: require("./Asset/avatars/Jaydon Vaccaro.jpg"),
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "150,000",
    status: "Refund",
  },
  {
    id: 3,
    avatar: require("./Asset/avatars/Corey Schleifer.jpg"),
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "87,000",
    status: "Paid",
  },
  {
    id: 4,
    avatar: require("./Asset/avatars/Cooper Press.jpg"),
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "100,000",
    status: "Refund",
  },
  {
    id: 5,
    avatar: require("./Asset/avatars/Phillip Lubin.jpg"),
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "78,000",
    status: "Paid",
  },
];

const totalOrderData = [
  11, 0, 0, 3, 0, 0, 3, 8, 3, 11, 7, 11, 4, 15, 10, 10, 19, 14, 17, 11, 21, 8,
  6, 9, 9, 13, 13.5, 8, 19, 6, 11, 11, 21, 12, 17, 17, 14, 14,
];

const totalRefundData = [
  15, 18, 18, 13, 22, 12, 12, 7, 20, 12, 12, 16, 6, 12, 8, 12, 1, 0.5, 0, 4, 9,
  4, 1, 1, 4, 1, 22,
];

const topPlatformData = [
  {
    name: "Book Bazaar",
    progress: 54.2,
    amount: "2,500,000",
    percentage: 15,
    color: "#6160DC",
  },
  {
    name: "Artisan Aisle",
    progress: 45.2,
    amount: "1,800,000",
    percentage: 10,
    color: "#54C5EB",
  },
  {
    name: "Toy Troop",
    progress: 27,
    amount: "1,200,000",
    percentage: 8,
    color: "#FFB74A",
  },
  {
    name: "XStore",
    progress: 27,
    amount: "00,000",
    percentage: 5,
    color: "#FF4A55",
  },
];

function App() {
  const [sales, setSales] = useState(monthlySales);

  const onDurationChange = ({ target: { value } }) => {
    if (value === "weekly") {
      setSales(weeklySales);
    } else {
      setSales(monthlySales);
    }
  };

  useEffect(() => {
    document.title = `${document.title} | Dashboard`;
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <div className="ml-14 lg:ml-20">
        <Header />
        <main className="p-2 md:p-5 mt-16 lg:mt-[88px]">
          <div className="flex items-center justify-end mb-5 xl:hidden">
            <MyDatePicker className="flex" />
          </div>
          <div className="flex w-full gap-5 lg:gap-0 flex-wrap justify-between">
            <div className="w-full lg:w-7/12 lg:pr-[10px]">
              <Card className="md:h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base md:text-lg font-semibold text-[#26282C] dark:text-white">
                    Sales Trends
                  </h3>
                  <div className="flex items-center space-x-[10px]">
                    <p className="hidden md:block text-[3A3F51] dark:text-gray-100 text-sm font-medium">
                      Sort by:
                    </p>
                    <CustomSelect onChange={onDurationChange} />
                  </div>
                </div>
                <Chart data={sales} />
              </Card>
            </div>
            <div className="w-full lg:w-5/12 flex flex-wrap gap-4 justify-between lg:pl-[10px]">
              <StatsCard
                Icon={BoxCheck}
                data={totalOrderData}
                title="Total Order"
                amount={350}
                isProfit
              />
              <StatsCard
                Icon={Rotate3D}
                data={totalRefundData}
                title="Total Refund"
                amount={270}
              />
              <StatsCard
                Icon={Cart}
                data={totalRefundData}
                title="Average Sales"
                amount={1567}
                isProfit
              />
              <StatsCard
                Icon={Coin}
                data={totalOrderData}
                title="Total Income"
                amount={"$350.000"}
              />
            </div>
            <div className="w-full lg:w-7/12  lg:pr-[10px] lg:mt-5">
              <Card className="">
                <div className="flex justify-between items-center mb-[14px]">
                  <h3 className="text-base md:text-lg font-semibold text-[#26282C] dark:text-white">
                    Last Orders
                  </h3>
                  <a
                    href="/"
                    className="text-primary  hover:text-green-700 text-base md:text-lg font-medium"
                  >
                    See all
                  </a>
                </div>

                <div className="overflow-x-auto xl:overflow-hidden">
                  {lastOrders.length > 0 && (
                    <table className="min-w-[400px] md:w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-[#9CA4AB] dark:text-gray-400 font-medium text-xs md:text-base">
                        <tr>
                          <th scope="col" className="py-2">
                            Name
                          </th>
                          <th scope="col" className="py-2">
                            Date
                          </th>
                          <th scope="col" className="py-2">
                            Amount
                          </th>
                          <th scope="col" className="py-2">
                            Status
                          </th>
                          <th scope="col" className="py-2">
                            Invoice
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {lastOrders.map((order) => (
                          <TableRow key={order.id} order={order} />
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </Card>
            </div>
            <div className="w-full lg:w-5/12 lg:pl-[10px] lg:mt-5">
              <Card className="border-none">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-base md:text-lg font-semibold text-[#26282C] dark:text-white">
                    Top Platform
                  </h3>
                  <a
                    href="/"
                    className="text-primary  hover:text-green-700 text-base md:text-lg font-medium"
                  >
                    See all
                  </a>
                </div>
                <ul className="space-y-5">
                  {topPlatformData.map((data) => (
                    <NewPlatformItem key={data.name} data={data} />
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
