import Head from "next/head";
import NavDashBoard from "@/components/dashboard/layout/Nav";
import SidebarDashBoard from "@/components/dashboard/layout/Sidebar";
import ContentDashBoard from "@/components/dashboard/layout/Content";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth";
import {Text} from "@nextui-org/react";
import Loading from "@/components/Loading";
export default function Dashboard() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible] = useState(false);
  const { isUserAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  useEffect(() => {
    setLoading(false);
    if(isUserAuthenticated()){
      setLoading(true);
    }
  }, []);
  return (
    <>
      {!loading ? (isUserAuthenticated() ? (
          <>
            <Head>
              <title>Dashboard</title>
              <meta name="robots" content="noindex,nofollow" />
            </Head>

            <NavDashBoard
                isCollapsible={isCollapsible}
                toggleCollapse={toggleCollapse}
                handleSidebarToggle={handleSidebarToggle}
            />
            <SidebarDashBoard toggleCollapse={toggleCollapse} />
            <ContentDashBoard />
          </>
      ) : (
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <Text className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              You are not authorized to view this page.
            </Text>
          </div>
      )) : <Loading/>}
    </>
  );
}
