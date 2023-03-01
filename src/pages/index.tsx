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
            className="btn-primary btn mr-4 capitalize lg:sm:mr-10"
            onClick={() => appStore.setCreatingBeer(true)}
          >
            Add a New Beer
          </button>
        }
        showHeaderRightComponentOn={[2]}
      ></TabSwitcher>
    </div>
  );
}
