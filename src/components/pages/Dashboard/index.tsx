import { Typography } from "../../atoms/Typography";
import { IconTypography } from "../../molecules/IconTypography";
import { Input } from "../../atoms/Input";
import { Img } from "../../atoms/Image";
import { CardDashBoard } from "../../molecules/CardDashBoard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  BOARD,
  DashBoardIcon,
  SheduleIcon,
  TransactionIcon,
  SettingsIcon,
  UserIcon,
  BellIcon,
  ProfileImage,
  SearchIcon,
  TotalRevenueIcon,
  TotalTransactionsIcon,
  TotalLikesIcon,
  TotalUsersIcon,
  TOTAL_REVENUES,
  TOTAL_TRANSACTIONS,
  TOTAL_LIKES,
  TOTAL_USERS,
} from "../../utils/constants";

const data = [
  {
    name: "",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 2",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Week 4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  // {
  //   name: "Page F",
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  {
    name: "",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const DashBoard = () => {
  return (
    <div className="flex  flex-col md:flex-row p-4 gap-5 bg-[#F5F5F5]">
      <div className="flex-none w-72 bg-black h-screen  rounded-2xl text-white p-11 mx-5 ">
        <div className="flex flex-col h-2/3">
          <Typography
            element={"h2"}
            children={BOARD}
            className="font-bold text-4xl mb-2"
          />
          <div className="flex flex-col h-full justify-evenly">
            <IconTypography
              element={"h3"}
              children={"Dashboard"}
              src={DashBoardIcon}
              alt={"dashboard"}
            />
            <IconTypography
              element={"h3"}
              children={"Transactions"}
              src={TransactionIcon}
              alt={"transactions"}
            />
            <IconTypography
              element={"h3"}
              children={"Schedules"}
              src={SheduleIcon}
              alt={"schedule"}
            />
            <IconTypography
              element={"h3"}
              children={"Users"}
              src={UserIcon}
              alt={"user"}
            />
            <IconTypography
              element={"h3"}
              children={"Settings"}
              src={SettingsIcon}
              alt={"settings"}
            />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-3 align-middle h-1/3 font-montserrat">
          <Typography element={"h3"} children="Help" />
          <Typography element={"h3"} children="ContactUs" />
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="flex flex-wrap gap-2 flex-row justify-between align-middle">
          <Typography
            element={"h3"}
            className="font-bold text-2xl font-montserrat"
            children="Dashboard"
          />
          <div className="flex flex-row align-middle  gap-5 justify-between">
            <div className="flex flex-row align-middle relative">
              <Input
                type="text"
                className="p-1 pl-4 pr-2 bg-white outline-none border-none rounded-full"
                placeholder="Search..."
              />
              <Img
                src={SearchIcon}
                alt={SearchIcon}
                className="absolute right-4 top-[10px]"
              />
            </div>
            <Img src={BellIcon} alt={BellIcon} className="max-w-[18px]" />
            <Img src={ProfileImage} alt={"profile"} className="max-w-[32px]" />
          </div>
        </div>
        <div className="flex my-5 gap-5 flex-row justify-between align-middle">
          <CardDashBoard
            firstele={"h3"}
            firstchild={TOTAL_REVENUES}
            secondele={"p"}
            secondchild={"$2,129,430"}
            src={TotalRevenueIcon}
            alt={TotalRevenueIcon}
            cardclass={"bg-[#DDEFE0]"}
          />
          <CardDashBoard
            firstele={"h3"}
            firstchild={TOTAL_TRANSACTIONS}
            secondele={"p"}
            secondchild={"1,520"}
            src={TotalTransactionsIcon}
            alt={""}
            cardclass={"bg-[#F4ECDD]"}
          />
          <CardDashBoard
            firstele={"h3"}
            firstchild={TOTAL_LIKES}
            secondele={"p"}
            secondchild={"892"}
            src={TotalLikesIcon}
            alt={""}
            cardclass={"bg-[#EFDADA]"}
          />
          <CardDashBoard
            firstele={"h3"}
            firstchild={TOTAL_USERS}
            secondele={"p"}
            secondchild={"892"}
            src={TotalUsersIcon}
            alt={""}
            cardclass={"bg-[#DEE0EF]"}
          />
        </div>
        <div className="my-10 py-8 bg-white rounded-2xl">
          <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="1"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                padding={{ left: 0, right: 10 }}
              />
              <YAxis tickLine={false} axisLine={false} />
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                dot={false}
                activeDot={{ r: 0 }}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                dot={false}
                activeDot={{ r: 0 }}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
