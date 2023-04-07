import {
  UilNewspaper,
  UilCommentAltChartLines,
  UilUsersAlt,
  UilFolderOpen,
  UilCopyAlt,
  UilFileGraph,
} from "@iconscout/react-unicons";
import { dataBar, dataPie, options } from "@/components/dashboard/utils/chart";
import { Bar, Pie } from "react-chartjs-2";
import { Text, User } from "@nextui-org/react";
import { translation } from "@/translation/english/main";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const Loading = dynamic(() => import("@/components/Loading"), {
  ssr: false,
});
export default function ContentDashBoard({tags:tagsData,articles:article,comments:commentsData,users:user}) {
  const { articles, comments, tags, pages, users, reports } =
    translation.dashboard.content.top;
  const [loading, setLoading] = useState(true);
  const usersData = user?.users;
  const articlesData = article?.count;
  const reportsData = tagsData;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  return (
      <>
        {(<div className="p-4 sm:ml-64">
          <div className="p-4 mt-14">
            <div className="grid flex-col md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilNewspaper
                    size={80}
                    className="text-white dark:text-orange-500"
                />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {articlesData}
              </span>
                  <span className="text-xl text-gray-200">{articles}</span>
                </p>
              </div>
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilFolderOpen
                    size={80}
                    className="text-white dark:text-orange-500"
                />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {tagsData?.length}
              </span>
                  <span className="text-xl text-gray-200">{tags}</span>
                </p>
              </div>
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilCommentAltChartLines
                    size={80}
                    className="text-white dark:text-orange-500"
                />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {commentsData?.length > 0 ? commentsData?.length : 0}
              </span>
                  <span className="text-xl text-gray-200">{comments}</span>
                </p>
              </div>
            </div>

            <div className="grid flex-col md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilCopyAlt size={80} className="text-white dark:text-orange-500" />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {articlesData?.length > 0 ? articlesData?.length : 0}
              </span>
                  <span className="text-xl text-gray-200">{pages}</span>
                </p>
              </div>
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilUsersAlt
                    size={80}
                    className="text-white dark:text-orange-500"
                />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {usersData?.length > 0 ? usersData?.length : 0}
              </span>
                  <span className="text-xl text-gray-200">{users}</span>
                </p>
              </div>
              <div className="flex items-center text-white gap-8 shadow-xl justify-center h-48 rounded bg-orange-500 dark:bg-zinc-900">
                <UilFileGraph
                    size={80}
                    className="text-white dark:text-orange-500"
                />
                <p className="text-lg ">
              <span className="pb-2 block text-5xl font-bold">
                {commentsData?.length > 0 ? commentsData?.length : 0}
              </span>
                  <span className="text-xl text-gray-200">{reports}</span>
                </p>
              </div>
            </div>
            <div className="mb-4 px-2 my-8">
              <Text h2 size="$2xl">
                Visitors
              </Text>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex shadow w-full h-fit py-8 px-4 items-center justify-center rounded bg-gray-100 h-28 dark:bg-zinc-900">
                <div className="flex flex-col md:flex-row justify-start  md:h-52">
                  <div className="flex justify-start">
                    <Bar data={dataBar} options={options} />
                  </div>
                </div>
              </div>
              <div className="flex shadow w-full h-fit py-8 px-4 items-center justify-center rounded bg-gray-100 h-28 dark:bg-zinc-900">
                <div className="flex flex-col md:flex-row justify-start  md:h-52">
                  <div className="flex justify-start">
                    <Pie data={dataPie} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex rounded bg-gray-100 p-8  dark:bg-zinc-900">
                <div className="flex flex-col gap-4">
                  <Text h2 size="$2xl">
                    Last Users
                  </Text>
                  <div className="flex flex-col gap-4">
                    {usersData?.length > 0 ? (
                        usersData?.slice(0, 4).map((user) => (
                            <User
                                squared
                                src={user.profilePhoto}
                                name={<Text size="$lg">{user.firstName}</Text>}
                                css={{ p: 0 , zIndex: 1}}
                                key={user._id}
                            >
                              <Text size="$sm" color="gray">
                                {user.email}
                              </Text>
                            </User>
                        ))
                    ) : (
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                          No users
                        </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex rounded bg-gray-100 p-8  dark:bg-zinc-900">
                <div className="flex flex-col gap-4">
                  <Text h2 size="$2xl">
                    Last Reports
                  </Text>
                  <div className="flex flex-col gap-4">
                    {reportsData?.length > 0 ? (
                        reportsData?.slice(0, 4).map((user) => (
                            <User
                                squared
                                src={user.profilePhoto}
                                name={<Text size="$lg">{user.firstName}</Text>}
                                css={{ p: 0 }}
                                key={user._id}
                            >
                              <Text size="$sm" color="gray">
                                {user.email}
                              </Text>
                            </User>
                        ))
                    ) : (
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                          No users
                        </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}</>
  );
}
