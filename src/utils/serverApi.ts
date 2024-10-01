import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  if (!RIOT_API_KEY) {
    throw new Error("api key undefind");
  }
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );
  const version: string = await versionResponse.json();

  const championsList = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    }
  );

  const championsListArray: Array<string> = await championsList.json();

  return NextResponse.json(championsListArray);
}
