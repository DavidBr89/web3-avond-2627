import { useParams } from "react-router";
import { useEventById } from "../hooks/useEventById";

const EventDetailPage = () => {
  const { eventId } = useParams();

  const { data, isLoading, isError } = useEventById(eventId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Er is iets fout gegaan!</p>;
  }

  if (!data) {
    return <p>Geen event gevonden voor deze id</p>;
  }

  return (
    <div>
      <p>Event met id: {data.name}</p>
    </div>
  );
};

export default EventDetailPage;
