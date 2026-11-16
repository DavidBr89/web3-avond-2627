import { useQuery } from "@tanstack/react-query";
import { getEventById } from "../api";

export const useEventById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => getEventById(id, signal),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10_000,
  });
};
