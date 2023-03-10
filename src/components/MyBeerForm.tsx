import { Beer } from "@/types/beer";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import { useBeerStore } from "@/store/beer.store";
import { useAppStore } from "@/store/app.store";

export function MyBeerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<Beer, "name" | "tagline" | "description">>();

  const DUMMY_BEER_IMAGE_URL = "/dummy-beer.png" as const;

  const setCreatingBeer = useAppStore((state) => state.setCreatingBeer);
  const addBeer = useBeerStore((state) => state.addBeer);

  function handleBeerCreate(data: FieldValues) {
    const beerObj = {
      id: Math.random(),
      image_url: DUMMY_BEER_IMAGE_URL,
      name: data.name,
      tagline: data.tagline,
      description: data.description,
    } as Beer;

    addBeer(beerObj);
    setCreatingBeer(false);
  }

  return (
    <div
      onClick={() => {}}
      className="fixed top-0 z-10 h-[100vh] w-[100vw] bg-[#16161690]"
    >
      <div className="fixed left-[50%] top-[50%] w-[355px] translate-x-[-50%] translate-y-[-55%] rounded-md bg-white p-8 lg:sm:w-[500px]">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start">
            <p className="text-2xl font-bold">Add a New Beer</p>
          </div>
          <div className="mt-6 flex w-full flex-col items-start">
            <div className="mb-4 flex h-[130px] w-[130px] justify-center border">
              <Image
                className="object-contain"
                src={DUMMY_BEER_IMAGE_URL}
                alt="dummy beer"
                width={73}
                height={100}
              />
            </div>
            <form
              className="w-full"
              onSubmit={handleSubmit((data) => handleBeerCreate(data))}
            >
              <div className="mt-2">
                <input
                  className={`w-full rounded-md border border-gray-300 p-2 ${
                    !errors.name && "mb-5"
                  }`}
                  type="text"
                  placeholder="Name*"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="mb-2 text-sm text-red-600">Name is required.</p>
                )}
              </div>

              <div>
                <input
                  className={`w-full rounded-md border border-gray-300 p-2 ${
                    !errors.tagline && "mb-5"
                  }`}
                  type="text"
                  placeholder="Tagline*"
                  {...register("tagline", { required: true })}
                />
                {errors.tagline && (
                  <p className="mb-2 text-sm text-red-600">
                    Tagline is required.
                  </p>
                )}
              </div>

              <div>
                <textarea
                  className={`w-full rounded-md border border-gray-300 p-2 ${
                    !errors.description && "mb-5"
                  }`}
                  placeholder="Description*"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <p className="mb-2 text-sm text-red-600">
                    Description is required.
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-3">
                <div
                  onClick={() => setCreatingBeer(false)}
                  className="btn-outline btn mt-2 w-[100px] rounded-md border border-gray-300"
                >
                  Cancel
                </div>
                <button className="btn-primary btn mt-2 w-[100px] rounded-md border border-gray-300 p-2">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
