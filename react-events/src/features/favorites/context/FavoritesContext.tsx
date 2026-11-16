// Stap 1: Context aanmaken

import { createContext } from "react";
import type { TMEvent } from "../../events/types";

interface FavoritesContextType {
  favorites: TMEvent[];
  addEvent: (event: TMEvent) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);
