import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Hello </h1>
      <p className="text-3xl ">world </p>
    </div>
  );
}