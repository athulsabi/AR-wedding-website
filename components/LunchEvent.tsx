"use client";

import EventCard from "./EventCard";

export default function LunchEvent() {
  return (
    <EventCard
      image="/images/lunch-event.jpg"
      tag="Wedding Feast"
      title="Sadhya"
      description="Following the wedding ceremony, we warmly invite you to join us for a traditional Kerala Sadhya as we celebrate this joyful occasion together with family and friends."
      date="21 August 2026"
      time="11:30 AM Onwards"
      venue="SANA OCCASION CENTRE"
      address={`Choorakkode, Palakkad, Kerala`}
      mapLink="https://maps.app.goo.gl/iFtazPNFrjTvx4Xx9"
    />
  );
}