import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Divider from "@/components/Divider";
import OurStory from "@/components/OurStory";
import Timeline from "@/components/Timeline";
import ParallaxQuote from "@/components/ParallaxQuote";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import ParallaxQuote2 from "@/components/ParallaxQuote2";
import Registry from "@/components/Registry";
import Footer from "@/components/Footer";
import MusicToggle from "@/components/MusicToggle";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Countdown />
        <Divider />
        <OurStory />
        <Timeline />
        <ParallaxQuote />
        <EventDetails />
        <Divider />
        <Gallery />
        <ParallaxQuote2 />
        <RSVP />
        <Registry />
        <Divider />
      </main>
      <Footer />
      <MusicToggle />
    </>
  );
}
