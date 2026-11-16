import { useFavorites } from "../hooks/useFavorites";

const FavoritesPage = () => {
  // Stap 4: Gebruiken van een context - eigen custom hook

  const { favorites } = useFavorites();

  return (
    <div>
      {favorites.map((f) => (
        <p key={f.id}>{f.name}</p>
      ))}
    </div>
  );
};

export default FavoritesPage;
