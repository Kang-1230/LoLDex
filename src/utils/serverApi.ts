"use server";

import { Champion, ChampionResponse } from "@/types/Champion";
import { Datum, Item } from "@/types/Item";

export async function getVersion() {
  //콘솔 확인 완
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionResponse.json();

  return version[0];
}

export async function fetchChampionList() {
  //모두 콘솔 확인
  const version = await getVersion();
  const championsList = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  const championsListData: ChampionResponse = await championsList.json();
  console.log(Object.values(championsListData.data));

  return Object.values(championsListData.data);
}

export async function getChampionDetail(id: string) {
  const version = await getVersion();

  const detailResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const detail: Champion = await detailResponse.json();

  return { detail };
}

//아이템
export async function getItemList() {
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  const version = await getVersion();

  const itemList = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );
  const items: Item = await itemList.json();
  const itemData: Datum[] = Object.values(items.data);
  console.log("데이터 아이템 : ", itemData);

  return { itemData };
}
