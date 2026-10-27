import React, { useEffect, useState } from "react";
import type { TMEvent, TMResponse } from "../types";

const EventList = () => {
  const [events, setEvents] = useState<TMEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TM_API_KEY}`,
        );
        const data = (await response.json()) as TMResponse;
        setEvents(data._embedded.events);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <p className="animate-pulse">Loading....</p>;
  }

  return (
    <div>
      {events.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
};

export default EventList;
