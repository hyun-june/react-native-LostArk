export interface CharData {
  ExpeditionLevel: number;
  CharacterName: string;
  GuildName: string;
  CharacterClassName: string;
  CharacterImage: string;
  CharacterLevel: number;
  CombatPower: string;
}

export interface CharFormProps {
  Char: CharData;
}

export interface CharInfoProps {
  label: string;
  data: string | number;
}
