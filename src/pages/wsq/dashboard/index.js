import Head from 'next/head';
import NavDashBoard from "@/components/dashboard/layout/Nav";
import SidebarDashBoard from "@/components/dashboard/layout/Sidebar";
import ContentDashBoard from "@/components/dashboard/layout/Content";

export default function Dashboard() {
    return <>
        <Head>
            <title>Dashboard</title>
            <meta name="robots" content="noindex,nofollow" />
        </Head>

        <NavDashBoard/>
        <SidebarDashBoard/>
        <ContentDashBoard/>
    </>;
}
