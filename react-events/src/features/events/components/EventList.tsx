import { getEvents } from "../api";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";

const EventList = () => {
  // const [events, setEvents] = useState<TMEvent[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       // Alternatieve manier met de fetch API
  //       // const response = await fetch(
  //       //   `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TM_API_KEY}`,
  //       // );
  //       // const data = (await response.json()) as TMResponse;

  //       const response = await getEvents();
  //       setEvents(response.data._embedded.events);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  // useEffect(() => {
  //   const timerId = setInterval(async () => {
  //     try {
  //       const data = await getEvents();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, 100);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  const { data, isLoading, isError, dataUpdatedAt } = useQuery({
    queryKey: ["events"],
    queryFn: ({ signal }) => getEvents(signal),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10_000,
  });

  if (isLoading) {
    return <p className="animate-pulse">Loading....</p>;
  }

  if (isError) {
    return <p>Er is iets fout gegaan!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <p>{new Date(dataUpdatedAt).toLocaleTimeString()}</p>
      {data === undefined ? (
        <p>Geen events!</p>
      ) : (
        data._embedded.events.map((e) => <EventCard key={e.id} event={e} />)
      )}
    </div>
  );
};

export default EventList;
