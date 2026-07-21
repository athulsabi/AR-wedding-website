"use client";

import EventCard from "./EventCard";

export default function ReceptionEvent() {
  return (
    <EventCard
      tag="Wedding Reception"
      title="Reception"
      description="Join us for an evening filled with love, laughter, delicious food, and cherished moments as we celebrate the beginning of our new journey together."
      date="22 August 2026"
      time="6:00 PM Onwards"
      venue="Tiny Tots School Auditorium"
      address={`Roadmukku, Alappuzha, Kerala`}
      mapLink="https://maps.app.goo.gl/BCzijbzHjFFiR1mz5"
    />
  );
}