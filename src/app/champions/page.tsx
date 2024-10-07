//ISR
import { Champions } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export default async function Page() {
  const championList: Champions[] = await fetchChampionList();
  // console.log("리스트 : ", championList);
  return (
    <>
      <div className="">
        {championList.map((champion: Champions) => {
          return (
            <Link href={`/champions/${champion.id}`} key={champion.id}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={100}
                height={100}
              />
              <li>{champion.name}</li>
            </Link>
          );
        })}
      </div>
    </>
  );
}
