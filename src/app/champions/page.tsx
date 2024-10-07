//ISR
import { Champions } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export default async function Page() {
  const championList: Champions[] = await fetchChampionList();
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Champions</h1>
      <div className="px-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-4 ">
        {championList.map((champion: Champions) => {
          return (
            <Link
              href={`/champions/${champion.id}`}
              key={champion.id}
              className="w-36 h-48 border border-gray-300 flex flex-col items-center justify-center rounded-lg p-2"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
              />
              <li className="mt-2 text-center list-none">{champion.name}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
