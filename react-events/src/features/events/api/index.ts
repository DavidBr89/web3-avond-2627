import type { TMEvent, TMResponse } from "../types";
import { ticketMasterApi } from "../../../shared/api/ticketMasterApi";

export const getEvents = async (signal?: AbortSignal) => {
  const response = await ticketMasterApi.get<TMResponse>("/events", {
    params: {
      size: 40,
      countryCode: "BE",
      postalCode: "9000",
    },
    signal,
  });
  return response.data;
};

export const getEventById = async (
  id: string | undefined,
  signal?: AbortSignal,
) => {
  if (id === undefined) {
    throw new Error("Foutieve id");
  }

  const response = await ticketMasterApi.get<TMEvent>(`/events/${id}`, {
    signal,
  });
  return response.data;
};

// export const createEvent = async () => {
//   const response = await Axios.post(
//     `https://app.ticketmaster.com/discovery/v2/events`,
//     {
//       name: "Een nieuw event",
//     },
//     {
//       params: {
//         apikey: import.meta.env.VITE_TM_API_KEY,
//       },
//     },
//   );
//   return response;
// };
