import { Datum } from "@/types/Item";
import { getItemList } from "@/utils/serverApi";
import Image from "next/image";

export default async function Page() {
  const ItemList = await getItemList();
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-6">Items</h1>
      <div className="px-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-4 ">
        {ItemList.itemData.map((item: Datum) => {
          return (
            <div
              key={item.image.full}
              className="w-36 h-48 border border-gray-300 flex flex-col items-center justify-center rounded-lg p-2"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                priority
              />
              <li className="mt-2 text-center list-none">{item.name}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}
