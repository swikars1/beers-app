import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-max p-4">
      {children}
    </div>
  );
}

function BeerInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-max p-4">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Hello </h1>
      <p className="text-3xl ">world </p>
      <Card>aasd</Card>
    </div>
  );
}
