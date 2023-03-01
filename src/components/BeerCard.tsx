import { Ingredients, type Beer } from "@/types/beer";
import Image from "next/image";

export interface IBeerCard {
  name: string;
  description: string;
  tagline: string;
  image_url: string;
  ingredients?: Ingredients;
}

export function BeerCard({
  name,
  description,
  tagline,
  image_url,
  ingredients,
}: IBeerCard) {
  function getIngredients() {
    if (!ingredients) {
      return "";
    }
    const allIngredients = [
      ...ingredients.hops.map((hop) => hop.name),
      ...ingredients.malt.map((malt) => malt.name),
      ingredients.yeast,
    ];
    return Array.from(new Set(allIngredients)).join(", ");
  }

  return (
    <div className="flex gap-3 rounded-lg bg-white p-5 shadow-md hover:cursor-pointer hover:bg-blue-50 hover:shadow-none lg:sm:gap-6">
      <div
        className="tooltip tooltip-right tooltip-primary mx-2 lg:sm:mx-4"
        data-tip={
          getIngredients() ? `Ingredients: ${getIngredients()}` : undefined
        }
      >
        <Image
          className="h-40 min-w-[55px] object-contain object-center"
          src={image_url || "/no_image.png"}
          alt="beer image"
          height={160}
          width={75}
        />
      </div>
      <div className="max-h-35 w-full lg:sm:max-h-40">
        <h2 className="mb-3 text-xl font-bold line-clamp-2 lg:sm:text-2xl">
          {name}
        </h2>
        <p className="mb-3 font-semibold text-yellow-600 line-clamp-1">
          {tagline}
        </p>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
