import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Movie Ticket</title>
        <meta name="description" content="Make movie ticket easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="dmainpage border ">
      <div className="border text-center">
        <h1>My Movie Ticket</h1>
        <p className="lead">
  Make movie ticket easy
</p>
</div>
        </div>
          </>
  );
}
