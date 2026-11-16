import { useFavorites } from "../../favorites/hooks/useFavorites";
import type { TMEvent } from "../types";
import { Link } from "react-router";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  const { addEvent } = useFavorites();

  return (
    <Link to={`/events/${event.id}`} className="p-4 m-4 rounded-2xl shadow-2xl">
      <button
        className="p-4 bg-amber-300 text-white"
        onClick={() => {
          addEvent(event);
          // e.stopPropagation();
        }}>
        Voeg toe aan favorieten
      </button>
      <img className="w-full h-48" src={firstImage.url} alt="" />
      <h1 className="font-bold text-2xl text-center">{event.name}</h1>
      {/* <a href="https://google.be">Google</a> */}
    </Link>
  );
};

export default EventCard;
