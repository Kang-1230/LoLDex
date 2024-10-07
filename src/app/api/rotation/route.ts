import { Champions } from "@/types/Champion";
import { RotationIds } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";
// import { NextResponse } from "next/server";

export async function GET() {
  //API KEY 불러오기
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  if (!RIOT_API_KEY) {
    throw new Error("api key undefind");
  }

  //rotation champions id값 불러오기//콘솔 체크 완
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );
  const rotations: RotationIds = await response.json();

  console.log("로테이션 : ", rotations);
  const resultRotationIds = rotations.freeChampionIds;

  //버전 불러오기
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version = await versionResponse.json();

  // champions 목록 불러오기

  const championsListresult = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`
  );
  const championList = await championsListresult.json();
  const championIdList: { [key: string]: Champions } = championList.data;

  //필터링 함수

  const filteredChampions = Object.values(championIdList).filter(
    (it: Champions) => {
      return resultRotationIds.some((el) => el === Number(it.key));
    }
  );

  //   return NextResponse.json(filteredChampions);

  return NextResponse.json({
    // rotations,
    // resultRotationIds,
    // // version,
    // championIdList,
    filteredChampions,
  });
}
