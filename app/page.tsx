"use client";

import { useState } from "react";

import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Welcome onOpen={() => setOpened(true)} />;
  }

  return (
    <main className="overflow-x-hidden">
      <Intro />
      <Countdown />
      <Story />
      <Events />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />
    </main>
  );
}