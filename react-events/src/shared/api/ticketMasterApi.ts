// Nieuwe Axios instantie aanmaken

import Axios from "axios";

export const ticketMasterApi = Axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
  params: {
    apikey: import.meta.env.VITE_TM_API_KEY,
  },
});
