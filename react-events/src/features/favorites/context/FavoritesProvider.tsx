// Stap 2: Context koppelen aan een Provider (Aanmaken van een Provider)

import { useState, type PropsWithChildren } from "react";
import type { TMEvent } from "../../events/types";
import { FavoritesContext } from "./FavoritesContext";

const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<TMEvent[]>([]);

  const addEvent = (event: TMEvent) => {
    // TODO: Als het event er al inzit moet het eruit, en anders mag het erin
    setFavorites([...favorites, event]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addEvent: addEvent,
      }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
