import Head from 'next/head';
import {useContext} from "react";
import {AuthContext} from "@/context/auth";

export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  return <>
  <Head>
    <title>WSQ</title>
    <meta name="description" content="Wsq is content management system built on speed and simplicity" />
  </Head>
    <div>
        <h1>{JSON.stringify(user)}</h1>
    </div>
  </>;
}
