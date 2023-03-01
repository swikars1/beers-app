import { useState } from "react";

export function TabSwitcher({
  tabs,
  headerRightComponent,
  showHeaderRightComponentOn,
}: {
  tabs: { id: number; name: string; component: React.ReactNode }[];
  headerRightComponent?: React.ReactNode;
  showHeaderRightComponentOn?: number[];
}) {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const content = tabs.find((t) => t.id === selectedTabId)?.component;
  return (
    <div>
      <div className="fixed z-10 flex h-[90px] w-full items-center justify-between gap-5 bg-white pl-5 lg:sm:pl-11 ">
        <div className="flex gap-3 lg:sm:gap-5">
          {tabs.map((tab) => (
            <button
              className={`text-md font-medium lg:sm:text-xl ${
                selectedTabId === tab.id ? "text-black" : "text-gray-400"
              }`}
              key={tab.id}
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        {showHeaderRightComponentOn &&
        headerRightComponent &&
        showHeaderRightComponentOn.includes(selectedTabId)
          ? headerRightComponent
          : null}
      </div>
      <hr />
      <div className="mt-6">{content}</div>
    </div>
  );
}
