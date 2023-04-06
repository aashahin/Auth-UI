import {
  UilAnalytics,
  UilChartPieAlt,
  UilCommentAltMessage, UilCopyAlt, UilFile, UilFileGraph, UilFileMedical,
  UilFilePlus,
  UilFolderOpen,
  UilFolderPlus,
  UilNotebooks,
  UilNotes, UilSetting, UilUsersAlt,
} from "@iconscout/react-unicons";
import Link from "next/link";
import { Collapse, Text } from "@nextui-org/react";
import { translation } from "@/translation/english/main";

export default function SidebarDashBoard({ toggleCollapse }) {
  const {
    dashboard,
    articles,
    allArticles,
    addArticle,
    comments,
    tags,
    allTags,
    addTag,
    pages,
    allPages,
    addPage,
    users,
    allUsers,
    addUser,
    reports,
    analytics,
    security,
    settings,
  } = translation.dashboard.sidebar;
  return (
    <>
      <div
        className={
          toggleCollapse
            ? "fixed z-40 pt-20 h-full block w-64 pt-8 pb-4 bg-white text-gray-900 flex justify-between flex-col border border-orange-500 border-l-0 border-b-0 dark:bg-gray-900 dark:text-gray-200"
            : `fixed z-40 pt-20 h-full hidden md:block w-64 pt-8 pb-4 bg-white text-gray-900 flex justify-between flex-col border border-orange-500 border-l-0 border-b-0 dark:bg-gray-900 dark:text-gray-200`
        }
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <div className="flex flex-col mt-12">
          <Link
            href="/wsq/dashboard"
            className="flex items-center  gap-4 px-2 py-4 hover:bg-orange-200 dark:hover:bg-zinc-800"
          >
            <UilChartPieAlt size={32} color={"#CE5300"} />
            <Text size="$2xl" weight="semibold">
              {dashboard}
            </Text>
          </Link>
          <Collapse
            contentLeft={
              <UilNotes size={32} color={"#CE5300"} className="mr-4" />
            }
            css={{ padding: "0 10px" }}
            title={
              <Text size="$2xl" weight="semibold">
                {articles}
              </Text>
            }
          >
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilNotebooks size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {allArticles}
              </Text>
            </Link>
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilFilePlus size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {addArticle}
              </Text>
            </Link>
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilCommentAltMessage size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {comments}
              </Text>
            </Link>
          </Collapse>{" "}
          <Collapse
            contentLeft={
              <UilFolderOpen size={32} color={"#CE5300"} className="mr-4" />
            }
            css={{ padding: "0 10px" }}
            title={
              <Text size="$2xl" weight="semibold">
                {tags}
              </Text>
            }
          >
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilFolderOpen size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {allTags}
              </Text>
            </Link>
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilFolderPlus size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {addTag}
              </Text>
            </Link>
          </Collapse>
          <Collapse
            contentLeft={
              <UilFile size={32} color={"#CE5300"} className="mr-4" />
            }
            css={{ padding: "0 10px" }}
            title={
              <Text size="$2xl" weight="semibold">
                {pages}
              </Text>
            }
          >
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilCopyAlt size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {allPages}
              </Text>
            </Link>
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilFileMedical size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {addPage}
              </Text>
            </Link>
          </Collapse>
          <Collapse
            contentLeft={
              <UilUsersAlt size={32} color={"#CE5300"} className="mr-4" />
            }
            css={{ padding: "0 10px" }}
            title={
              <Text size="$2xl" weight="semibold">
                {users}
              </Text>
            }
          >
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilCopyAlt size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {allUsers}
              </Text>
            </Link>
            <Link
              href="/wsq/dashboard"
              className="flex items-center  gap-4 p-2 hover:bg-orange-200 rounded-xl dark:hover:bg-zinc-800"
            >
              <UilFileMedical size={28} color={"#CE5300"} />
              <Text size="$xl" weight="semibold">
                {addUser}
              </Text>
            </Link>
          </Collapse>
          <Link href="/wsq/dashboard" className="flex items-center  gap-4 py-4 px-2 hover:bg-orange-200 dark:hover:bg-zinc-800">
            <UilFileGraph size={32} color={"#CE5300"} />
            <Text size="$2xl" weight="semibold">
                {reports}
            </Text>
            </Link>
          <Link href="/wsq/dashboard" className="flex items-center  gap-4 py-4 px-2 hover:bg-orange-200 dark:hover:bg-zinc-800">
            <UilAnalytics size={32} color={"#CE5300"} />
            <Text size="$2xl" weight="semibold">
                {analytics}
            </Text>
            </Link>
          <Link href="/wsq/dashboard" className="flex items-center  gap-4 py-4 px-2 hover:bg-orange-200 dark:hover:bg-zinc-800">
            <UilSetting size={32} color={"#CE5300"} />
            <Text size="$2xl" weight="semibold">
                {settings}
            </Text>
            </Link>
        </div>
      </div>
    </>
  );
}
