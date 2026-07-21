"use client";

import { useState } from "react";

import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import WeddingEvent from "@/components/WeddingEvent";
import LunchEvent from "@/components/LunchEvent";
import ReceptionEvent from "@/components/ReceptionEvent";
import FamilyDetails from "@/components/FamilyDetails";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <Welcome onOpen={() => setOpened(true)} />
      ) : (
        <>
          <MusicPlayer isPlaying={true} />

          <main className="overflow-x-hidden">
            <Intro />

            <Countdown />

            <WeddingEvent />

            <LunchEvent />

            <ReceptionEvent />
            
            <FamilyDetails />

            <Story />

            <RSVP />

            <Footer />
          </main>
        </>
      )}
    </>
  );
}