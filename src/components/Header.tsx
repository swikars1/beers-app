import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header({
  rightComponent,
}: {
  rightComponent?: React.ReactNode;
}) {
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  const HEADER_ITEMS = [
    {
      name: "All Beers",
      route: "/",
    },
    {
      name: "My Beers",
      route: "/my_beers",
    },
  ];

  return (
    <div>
      <div className="fixed z-10 flex h-[80px] w-full items-center justify-between gap-5 bg-white pl-5 lg:sm:h-[90px] lg:sm:pl-11">
        <div className="flex gap-3 lg:sm:gap-5">
          {HEADER_ITEMS.map((item) => (
            <button
              key={item.route}
              className={`text-md font-medium text-gray-400 lg:sm:text-xl ${
                currentRoute === item.route ? "text-gray-700" : ""
              }`}
            >
              <Link href={item.route}>{item.name}</Link>
            </button>
          ))}
        </div>
        <div>{rightComponent}</div>
      </div>
      <div className="h-[65px] w-full lg:sm:h-[50px]"></div>
    </div>
  );
}
