import { AllBeers } from "@/components/AllBeers";
import { MyBeers } from "@/components/MyBeers";
import { TabSwitcher } from "@/components/TabSwitcher";
import { appStore } from "@/store/beer.store";

export default function Home() {
  const tabs = [
    {
      id: 1,
      name: "All Beers",
      component: <AllBeers />,
    },
    {
      id: 2,
      name: "My Beers",
      component: <MyBeers />,
    },
  ];

  return (
    <div>
      <TabSwitcher
        tabs={tabs}
        headerRightComponent={
          <button
            className="btn-primary btn mr-10 capitalize"
            onClick={() => appStore.setCreatingBeer(true)}
          >
            Add a New Beer
          </button>
        }
        showHeaderRightComponentOn={[2]}
      ></TabSwitcher>
      <button
        className="btn-secondary btn-xs absolute -top-[60px] right-10 capitalize"
        onClick={() => {
          appStore.setCreatingBeer(true);
        }}
      >
        Add a News Beer
      </button>
    </div>
  );
}
