import {
  UilChartPieAlt,
  UilNotebooks,
  UilNotes,
} from "@iconscout/react-unicons";
import Link from "next/link";
import { Text } from "@nextui-org/react";

export default function SidebarDashBoard({ toggleCollapse }) {
  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: UilChartPieAlt,
      link: "/wsq/dashboard",
    },
    {
      id: 2,
      label: "Articles",
      icon: UilNotes,
      link: "/wsq/posts",
    },
    {
      id: 3,
      label: "Tags",
      icon: UilNotebooks,
      link: "/wsq/dashboard",
    },
  ];
  return (
    <>
      <div
        className={
        toggleCollapse ? "fixed z-40 pt-20 h-screen block w-64 pt-8 pb-4 bg-white text-gray-900 flex justify-between flex-col border border-orange-500 border-l-0 border-b-0 dark:bg-gray-900 dark:text-gray-200"
            : `fixed z-40 pt-20 h-screen hidden md:block w-64 pt-8 pb-4 bg-white text-gray-900 flex justify-between flex-col border border-orange-500 border-l-0 border-b-0 dark:bg-gray-900 dark:text-gray-200`
        }
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <div className="flex flex-col mt-12">
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex items-center  gap-4 p-4 hover:bg-orange-200 dark:hover:bg-zinc-800"
            >
              <item.icon size={32} color={"#CE5300"} />
              <Text css={{ fontSize: "$xl" }}>{item.label}</Text>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
