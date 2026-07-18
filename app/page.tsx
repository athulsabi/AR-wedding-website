"use client";

import { useState } from "react";

import Welcome from "@/components/Welcome";
import Intro from "@/components/Intro";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
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

          <Intro />

          <Countdown />

          <Events />

          <Story />

          <Gallery />

          <Venue />

          <RSVP />

          <Footer />
        </>
      )}
    </>
  );
}