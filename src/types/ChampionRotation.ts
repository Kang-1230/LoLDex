export interface RotationIds {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
}

export type ChampionRotation = {
  filteredChampions: RotationChampionDetail[];
};

export type RotationChampionDetail = {
  blurb: string;
  id: string;
  image: RotationImage;
  info: RotationInfo;
  key: string;
  name: string;
  partype: string;
  stats: RotationStats;
  tags: string[];
  title: string;
  version: string;
};

// 이미지 정보를 담는 타입
type RotationImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 챔피언의 정보에 관한 타입
type RotationInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 챔피언의 스탯에 관한 타입
type RotationStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
