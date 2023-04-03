import {
  UilNewspaper,
  UilNotebooks,
  UilCommentAltChartLines,
  UilUsersAlt,
} from "@iconscout/react-unicons";
import Chart from "@/components/dashboard/utils/chart";

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
        <div>
            <div className="mb-4 px-2">
                <h2 className="text-2xl font-semibold">Visitors</h2>
            </div>
          <div className="flex items-center shadow-xl justify-center mb-4 p-8 rounded shadow bg-gray-900 text-white dark:bg-zinc-900">
            <div className="w-full h-full">
              <div className="flex flex-col md:flex-row justify-between px-4">
                <div className="flex md:flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Monthly</h2>
                  <h2 className="text-2xl font-semibold">Weekly</h2>
                  <h2 className="text-2xl font-semibold">Daily</h2>
                </div>
                <div className="flex md:flex-col gap-4 py-4 md:py-0">
                  <h2 className="text-2xl font-semibold">1,200</h2>
                  <h2 className="text-2xl font-semibold">300</h2>
                  <h2 className="text-2xl font-semibold">50</h2>
                </div>
                <Chart />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-zinc-900">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-zinc-900">
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
