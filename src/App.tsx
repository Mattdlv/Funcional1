import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Welcome } from "./components/Welcome";
import { Timeline } from "./components/Timeline";
import { Venue } from "./components/Venue";
import { DressCode } from "./components/DressCode";
import { Menus } from "./components/Menus";
import { MenuCalculator } from "./components/MenuCalculator";
import { Payment } from "./components/Payment";
import { CalendarSection } from "./components/CalendarSection";
import { Gifts } from "./components/Gifts";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Countdown />
        <Welcome />
        <Timeline />
        <Venue />
        <DressCode />
        <Menus />
        <MenuCalculator />
        <Payment />
        <CalendarSection />
        <Gifts />
      </main>
      <Footer />
    </div>
  );
}
