export interface CharData {
  ExpeditionLevel: number;
  CharacterName: string;
  GuildName: string;
  CharacterClassName: string;
  CharacterImage: string;
  CharacterLevel: number;
  CombatPower: string;
  ItemAvgLevel: string;
  ServerName: string;
  Title: string;
  TownName: string;
  HonorPoint: number;
}

export interface CharFormProps {
  charProfile: CharData;
  classEngraving: string;
}

export interface CharInfoProps {
  label: string;
  data: string | number;
}
