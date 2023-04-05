import {
  UilNewspaper,
  UilCommentAltChartLines,
  UilUsersAlt,
} from "@iconscout/react-unicons";
import {data, dataPie, options} from "@/components/dashboard/utils/chart";
import {Bar, Pie} from "react-chartjs-2";
import {Text} from "@nextui-org/react";

export default function ContentDashBoard() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <div className="grid flex-col md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
            <UilNewspaper
              size={80}
              className="text-white dark:text-orange-500"
            />
            <p className="text-lg ">
              <span className="pb-2 block text-6xl font-bold">4571</span>
              <span className="text-xl text-gray-200">Posts</span>
            </p>
          </div>
          <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
            <UilUsersAlt
              size={80}
              className="text-white dark:text-orange-500"
            />
            <p className="text-lg ">
              <span className="pb-2 block text-6xl font-bold">284</span>
              <span className="text-xl text-gray-200">Users</span>
            </p>
          </div>
          <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
            <UilCommentAltChartLines
              size={80}
              className="text-white dark:text-orange-500"
            />
            <p className="text-lg ">
              <span className="pb-2 block text-6xl font-bold">486</span>
              <span className="text-xl text-gray-200">Comments</span>
            </p>
          </div>
        </div>
          <div className="mb-4 px-2 my-8">
            <Text h2 size="$2xl">Visitors</Text>
          </div>
        <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-4 mb-4">
          <div className="flex shadow w-full h-fit py-8 px-4 items-center justify-center rounded bg-gray-100 h-28 dark:bg-zinc-900">
            <div className="flex flex-col md:flex-row justify-start  md:h-52">
              <div className="flex md:flex-col gap-4 pr-11 w-1/3">
                <Text h2 size="$2xl">Monthly</Text>
                <Text h2 size="$2xl">Weekly</Text>
                <Text h2 size="$2xl">Daily</Text>
              </div>
              <div className="flex justify-start md:flex-col pr-11 gap-4 py-4 md:py-0 w-2/3">
                <Text h2 size="$2xl">1,200</Text>
                <Text h2 size="$2xl">300</Text>
                <Text h2 size="$2xl">50</Text>
              </div>
              <div className="w-full flex justify-end md:w-3/3">
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="flex items-center shadow h-fit py-8 px-4 justify-center rounded bg-gray-100 dark:bg-zinc-900">
            <div className="flex h-fit justify-between md:justify-end md:pr-16">
              <Pie data={dataPie} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex rounded bg-gray-100 p-8 h-96 dark:bg-zinc-900">
            <Text h2 size="$2xl">Last Users</Text>
          </div>
          <div className="flex items-center justify-center rounded shadow bg-gray-100 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
