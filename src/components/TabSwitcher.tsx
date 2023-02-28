import { appStore, beerStore } from "@/store/beer.store";
import { useState } from "react";

export function TabSwitcher({
  tabs,
  headerRightComponent,
  showHeaderRightComponentOn,
}: {
  tabs: { id: number; name: string; component: React.ReactNode }[];
  headerRightComponent: React.ReactNode;
  showHeaderRightComponentOn: number[];
}) {
  const [selectedTabId, setSelectedTabId] = useState(1);
  const content = tabs.find((t) => t.id === selectedTabId)?.component;
  return (
    <div>
      <div className="fixed flex w-full justify-between gap-5 pl-10 pt-5">
        <div className="flex gap-5">
          {tabs.map((tab) => (
            <button
              className={`text-xl font-medium ${
                selectedTabId === tab.id ? "text-black" : "text-gray-400"
              }`}
              key={tab.id}
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        {showHeaderRightComponentOn.includes(selectedTabId)
          ? headerRightComponent
          : null}
      </div>
      <hr />
      <div className="mt-6">{content}</div>
    </div>
  );
}
