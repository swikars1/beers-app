import { AllBeers } from "@/components/AllBeers";
import { MyBeers } from "@/components/MyBeers";
import { TabSwitcher } from "@/components/TabSwitcher";
import { appStore } from "@/store/beer.store";

const TABS = [
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
export default function Home() {
  return (
    <div>
      <TabSwitcher
        tabs={TABS}
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
