import Head from "next/head";
import NavDashBoard from "@/components/dashboard/layout/Nav";
import SidebarDashBoard from "@/components/dashboard/layout/Sidebar";
import ContentDashBoard from "@/components/dashboard/layout/Content";
import axios from "axios";

export default ({data})=> {
  console.log(data)
    return (
    <>
        Test
    </>
  );
}

export async function getServerSideProps(){
    const res = await axios.get("/tags");
    const data = await res.data;
return {
    props:{
        data
    }
  }
}