export interface IAd {
  id: string;
  name: string;
  gameId: string;
  game: {
    id: string;
    title: string;
    banner: string;
  };
  hoursStart: string;
  hoursEnd: string;
  weekDays: string[];
  yearsPlaying: number;
  useVoiceChannel: boolean;
}

const cultOfTheLamb = [
  {
    id: "206d0a22-d634-4f04-91af-8069afa5020f",
    name: "Talita",
    gameId: "53064bc6-44c8-42e7-abd7-82b090f0804c",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Cult of the Lamb",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    },
    hoursStart: "18:00",
    hoursEnd: "02:00",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "53064bc6-44c8-42e7-abd7-82b090f0804c",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Cult of the Lamb",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "53064bc6-44c8-42e7-abd7-82b090f0804c",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Cult of the Lamb",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "727d4886-8fd4-4931-ab6d-fa8d3c94c93a",
    name: "Pedro Leonardo Teixeira",
    gameId: "53064bc6-44c8-42e7-abd7-82b090f0804c",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Cult of the Lamb",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["1", "3", "5"],
    yearsPlaying: 5,
    useVoiceChannel: true,
  },
  {
    id: "6b8fbb20-f37d-4156-8931-9e57d9c3de55",
    name: "Pedro",
    gameId: "53064bc6-44c8-42e7-abd7-82b090f0804c",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Cult of the Lamb",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    },
    hoursStart: "18:00",
    hoursEnd: "22:00",
    weekDays: ["1", "3", "5"],
    yearsPlaying: 5,
    useVoiceChannel: true,
  },
];

const valorant = [
  {
    id: "206d0a22-d634-4f04-91af-8069afa5020f",
    name: "Talita",
    gameId: "1",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Valorant",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    },
    hoursStart: "18:00",
    hoursEnd: "02:00",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "2",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Valorant",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "3",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Valorant",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
];

const PokemonFireRedLeafGreen = [
  {
    id: "206d0a22-d634-4f04-91af-8069afa5020f",
    name: "Talita",
    gameId: "1",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Pokemon FireRed/LeafGreen",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/13332-285x380.jpg",
    },
    hoursStart: "18:00",
    hoursEnd: "02:00",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "2",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Pokemon FireRed/LeafGreen",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/13332-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "3",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Pokemon FireRed/LeafGreen",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/13332-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
];

const LeagueOfLegends = [
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "2",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "League of Legends",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "3",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "League of Legends",
      banner: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
];

const TheLastOfUsI = [
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "2",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "The Last of Us I",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "3",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "The Last of Us I",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
];

const EldenRing = [
  {
    id: "c169bffa-f75d-49b9-a7b9-349c96d06cdf",
    name: "Talita",
    gameId: "2",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Elden Ring",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
  {
    id: "ad6ac92f-1bc6-466e-8eda-b62d7b745299",
    name: "Pedro Leonardo Teixeira",
    gameId: "3",
    game: {
      id: "53064bc6-44c8-42e7-abd7-82b090f0804c",
      title: "Elden Ring",
      banner:
        "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-285x380.jpg",
    },
    hoursStart: "18:30",
    hoursEnd: "23:59",
    weekDays: ["0", "6"],
    yearsPlaying: 0,
    useVoiceChannel: true,
  },
];

export const adsByGame = {
  "Cult of the Lamb": cultOfTheLamb,
  Valorant: valorant,
  "Pokemon FireRed/LeafGreen": PokemonFireRedLeafGreen,
  "League of Legends": LeagueOfLegends,
  "Elden Ring": EldenRing,
  "The Last of Us I": TheLastOfUsI,
};
