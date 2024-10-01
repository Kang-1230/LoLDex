import { ChampionRotation } from "@/types/ChampionRotation";
// import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //API KEY 불러오기
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  if (!RIOT_API_KEY) {
    throw new Error("api key undefind");
  }

  //   //data 버전값
  //   const versionResponse = await fetch(
  //     "https://ddragon.leagueoflegends.com/api/versions.json",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-Riot-Token": RIOT_API_KEY,
  //       },
  //     }
  //   );
  //   const version: string = await versionResponse.json();

  //rotation champions id값 불러오기
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );
  const rotations: ChampionRotation = await response.json();
  console.log(rotations);

  //   const rotationIds = await rotations;
  //   const resultRotaionIds = rotationIds.freeChampionIds
  //     ? Object.values(rotationIds.freeChampionIds)
  //     : [];

  //champions 목록 불러오기

  const championsList = await fetch("/api/champions");
  console.log(championsList);

  //필터링 함수
  //   const filteredChampions = resultRotaionIds.filter((id) => {
  //     championsList.includes(id);
  //   });

  //   return NextResponse.json(filteredChampions);
}
