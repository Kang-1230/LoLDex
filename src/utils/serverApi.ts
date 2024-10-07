"use server";

import { Champion, ChampionResponse, Champions } from "@/types/Champion";
import { Datum, Item } from "@/types/Item";

export async function getVersion() {
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await versionResponse.json();

  // console.log("버전이 진짜인가 : ", version); // 확인
  console.log("버전 0번째 : ", version[0]);
  return version[0];
}

export async function fetchChampionList() {
  // console.log("버전 오류남 :", await getVersion()); //확인
  const version = await getVersion();
  const championsList = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  // console.log("챔피언리스트 오류 : ", championsList); //확인
  const championsListData: ChampionResponse = await championsList.json();
  // console.log("챔피언목록 오류 : ", championsListData); //확인
  console.log(Object.values(championsListData.data));

  return Object.values(championsListData.data);
}

export async function getChampionDetail(id: string) {
  //params 받아와서
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  const version = await getVersion();

  const detailResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const detail: Champion = await detailResponse.json();

  // const championDetailData = [...detailData];

  console.log("디테일 체크 :", detail);

  return { detail };
}

//아이템
export async function getItemList() {
  const { RIOT_API_KEY } = process.env;

  console.log("API_KEY 확인 :", RIOT_API_KEY);

  const version = await getVersion();

  const itemList = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  ); //id 어케함?
  const items: Item = await itemList.json();
  const itemData: Datum[] = Object.values(items.data);
  console.log("데이터 아이템 : ", itemData);

  return { itemData };
}

//뭐는 API 필요하고 뭐는 안필요한지 // 찾아볼것
//id 어케 하는지 // 걍하면됨
