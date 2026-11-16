import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../api";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: ({ signal }) => getEvents(signal),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10_000,
  });
};
