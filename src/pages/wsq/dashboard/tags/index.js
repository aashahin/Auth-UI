import Head from "next/head";
import NavDashBoard from "@/components/dashboard/layout/Nav";
import SidebarDashBoard from "@/components/dashboard/layout/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth";
import {Text} from "@nextui-org/react";
import Content from "@/pages/wsq/dashboard/tags/content";
import Loading from "@/components/Loading";
export default ()=> {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible] = useState(false);
    const { isUserAuthenticated } = useContext(AuthContext);
    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };
    return (
        <>
            <Head>
                <title>Tags</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            { (isUserAuthenticated() ? (
                <>
                    <NavDashBoard
                        isCollapsible={isCollapsible}
                        toggleCollapse={toggleCollapse}
                        handleSidebarToggle={handleSidebarToggle}
                    />
                    <SidebarDashBoard toggleCollapse={toggleCollapse} />
                    <Content />
                </>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <Text className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        You are not authorized to view this page.
                    </Text>
                </div>
            ))}
        </>
    );
}
