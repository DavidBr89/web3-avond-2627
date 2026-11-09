import React from "react";
import type { TMEvent } from "../types";

interface EventCardProps {
  event: TMEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const firstImage = event.images[0];

  return (
    <div className="p-4 m-4 rounded-2xl shadow-2xl">
      <img className="w-full h-48" src={firstImage.url} alt="" />
      <h1 className="font-bold text-2xl text-center">{event.name}</h1>
    </div>
  );
};

export default EventCard;
