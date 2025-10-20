export interface searchProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}
