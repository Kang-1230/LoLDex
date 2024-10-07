export interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: object;
}

export interface Champions {
  version: Version;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
  partype: string;
  stats: { [key: string]: number };
}
export interface Image {
  full: string;
  sprite: Sprite;
  group: Group;
  x: number;
  y: number;
  w: number;
  h: number;
}
export enum Group {
  Champion = "champion",
}
export enum Sprite {
  Champion0PNG = "champion0.png",
  Champion1PNG = "champion1.png",
  Champion2PNG = "champion2.png",
  Champion3PNG = "champion3.png",
  Champion4PNG = "champion4.png",
  Champion5PNG = "champion5.png",
}
export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}
export enum Version {
  The14191 = "14.19.1",
}

export type Spell = {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
};

export type Champion = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: {
        full: string;
      };
      lore: string;
      spells: Spell[];
      passive: {
        name: string;
        description: string;
        image: {
          full: string;
        };
      };
    };
  };
};
