import {
  UilAngleDown,
  UilChartPie,
  UilNewspaper,
  UilNotebooks,
} from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

export default function SidebarDashBoard() {
  const pathname = usePathname().slice(5);
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-orange-500"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/wsq/dashboard"
              className={
                pathname === "dashboard"
                  ? "flex items-center p-2 bg-orange-500 text-white rounded-lg dark:text-white hover:bg-gray-900 dark:bg-orange-500 dark:hover:bg-orange-500"
                  : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-orange-500"
              }
            >
              <UilChartPie
                className={
                  pathname === "dashboard"
                    ? "w-6 h-6 text-white transition duration-75 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-400"
                }
              />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
              aria-controls="dropdown-posts"
              data-collapse-toggle="dropdown-posts"
            >
              <UilNewspaper className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Posts
              </span>
              <UilAngleDown size={30} />
            </button>
            <ul id="dropdown-posts" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="/wsq/dashboard/posts"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
                >
                  All Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
                >
                  Add Post
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-xl text-gray-900 transition duration-75 rounded-lg group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
              aria-controls="dropdown-categories"
              data-collapse-toggle="dropdown-categories"
            >
              <UilNotebooks
                size={24}
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Categories
              </span>
              <UilAngleDown size={30} />
            </button>
            <ul id="dropdown-categories" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
                >
                  All Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-orange-100 dark:text-white dark:hover:bg-orange-500"
                >
                  Add Category
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}
