interface RaidGroup {
  raidKey: string;
  title: string;
  phases: number;
  stages: RaidStages[];
}

interface RaidStages {
  difficulty: "normal" | "hard" | "nightmare" | "stage1" | "stage2" | "stage3";
  level: number;
  gold: number;
  more: number;
}

export const raidData: RaidGroup[] = [
      {
    raidKey: "abrelshud_EX",
    title: "2막: 아브렐슈드 익스트림",
    phases: 1,
    stages: [
      { difficulty: "normal", level: 1720, gold: 20000, more: 0 },
      { difficulty: "hard", level: 1750, gold: 45000, more: 0 },
      { difficulty: "nightmare", level: 1770, gold: 45000, more: 0 },
    ],
  },
    {
    raidKey: "egir_EX",
    title: "1막: 에기르 익스트림",
    phases: 1,
    stages: [
      { difficulty: "normal", level: 1720, gold: 20000, more: 0 },
      { difficulty: "hard", level: 1750, gold: 45000, more: 0 },
      { difficulty: "nightmare", level: 1770, gold: 45000, more: 0 },
    ],
  },
  {
    raidKey: "Horizon",
    title: "지평의 성당",
    phases: 2,
    stages: [
      { difficulty: "stage1", level: 1700, gold: 30000, more: 9600 },
      { difficulty: "stage2", level: 1720, gold: 40000, more: 12800 },
      { difficulty: "stage3", level: 1750, gold: 50000, more: 16000 },
    ],
  },
  {
    raidKey: "Serca",
    title: "세르카",
    phases: 2,
    stages: [
      { difficulty: "normal", level: 1710, gold: 35000, more: 11200 },
      { difficulty: "hard", level: 1730, gold: 44000, more: 14080 },
      { difficulty: "nightmare", level: 1740, gold: 54000, more: 17280 },
    ],
  },
  {
    raidKey: "kazeros",
    title: "종막: 카제로스",
    phases: 2,
    stages: [
      { difficulty: "normal", level: 1710, gold: 40000, more: 12800 },
      { difficulty: "hard", level: 1730, gold: 52000, more: 16640 },
    ],
  },
  {
    raidKey: "armorche",
    title: "4막: 아르모체",
    phases: 2,
    stages: [
      { difficulty: "normal", level: 1700, gold: 33000, more: 10560 },
      { difficulty: "hard", level: 1720, gold: 42000, more: 13440 },
    ],
  },
  {
    raidKey: "mordoom",
    title: "3막: 모르둠",
    phases: 3,
    stages: [
      { difficulty: "normal", level: 1680, gold: 21000, more: 7010 },
      { difficulty: "hard", level: 1700, gold: 27000, more: 8350 },
    ],
  },
  {
    raidKey: "abrelshud",
    title: "2막: 아브렐슈드",
    phases: 2,
    stages: [
      { difficulty: "normal", level: 1670, gold: 16500, more: 5540 },
      { difficulty: "hard", level: 1690, gold: 23000, more: 7500 },
    ],
  },
  {
    raidKey: "egir",
    title: "1막: 에기르",
    phases: 2,
    stages: [
      { difficulty: "normal", level: 1660, gold: 11500, more: 2530 },
      { difficulty: "hard", level: 1680, gold: 18000, more: 5970 },
    ],
  },
  {
    raidKey: "echidna",
    title: "서막: 에키드나",
    phases: 2,
    stages: [{ difficulty: "hard", level: 1640, gold: 7200, more: 2350 }],
  },
  {
    raidKey: "behemoth",
    title: "베히모스",
    phases: 2,
    stages: [{ difficulty: "normal", level: 1640, gold: 7200, more: 2350 }],
  },
];
