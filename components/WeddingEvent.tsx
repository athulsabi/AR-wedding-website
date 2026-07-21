"use client";

import EventCard from "./EventCard";

export default function WeddingEvent() {
  return (
    <EventCard
      tag="Wedding Ceremony"
      title="Muhurtham"
      description="As the sacred chants fill the air and our hearts become one, we warmly invite you to witness our wedding ceremony and bless us as we begin this beautiful journey together."
      date="21 August 2026"
      time="10:05 AM – 10:25 AM"
      venue="Padinjare Madom Sree Guruvayoorappan Temple"
      address={`Pattambi, Palakkad, Kerala`}
      mapLink="https://maps.app.goo.gl/VGRMYtTWgiM8cjUh6"
    />
  );
}