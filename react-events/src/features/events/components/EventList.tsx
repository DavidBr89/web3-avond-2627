import { useEvents } from "../hooks/useEvents";
import EventCard from "./EventCard";

const EventList = () => {
  const { data, isLoading, isError } = useEvents();

  if (isLoading) {
    return <p className="animate-pulse">Loading....</p>;
  }

  if (isError) {
    return <p>Er is iets fout gegaan!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {/* <p>{new Date(dataUpdatedAt).toLocaleTimeString()}</p> */}
      {data === undefined ? (
        <p>Geen events!</p>
      ) : (
        data._embedded.events.map((e) => <EventCard key={e.id} event={e} />)
      )}
    </div>
  );
};

export default EventList;
