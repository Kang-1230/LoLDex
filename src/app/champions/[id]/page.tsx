import { Champion } from "@/types/Champion";
import { getChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "챔피언 상세 페이지",
  description: "챔피언의 자세한 정보를 확인합니다.",
};

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const championDetail: { detail: Champion } = await getChampionDetail(
    params.id
  );
  console.log("뭔가나서스킹 :", championDetail);
  const detailResult = championDetail.detail.data[params.id];
  console.log("장난아님3:", detailResult);

  return (
    <>
      <div>page : {params.id}</div>
      <div>{detailResult.title}</div>
      <div>{detailResult.name}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${detailResult.image.full}`}
        alt={detailResult.name}
        width={100}
        height={100}
      />
      <div>{detailResult.lore}</div>
      <div>
        {detailResult.spells.map((spell) => {
          return (
            <ul key={spell.name}>
              <li>{spell.name}</li>
              <li>{spell.description}</li>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
                alt={spell.name}
                width={100}
                height={100}
              />
            </ul>
          );
        })}
      </div>
    </>
  );
}
