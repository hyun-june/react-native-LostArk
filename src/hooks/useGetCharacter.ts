import { useQuery } from "@tanstack/react-query";
import { getCharacter, getRoster } from "../apis/characterApi";

export const useGetRoster = (id: string) => {
  return useQuery({
    queryKey: ["roster", id],
    queryFn: () => {
      return getRoster(id);
    },
    enabled: !!id,
  });
};

export const useGetCharacter = (id: string) => {
  return useQuery({
    queryKey: ["char", id],
    queryFn: () => {
      return getCharacter(id);
    },
    enabled: !!id,
  });
};
