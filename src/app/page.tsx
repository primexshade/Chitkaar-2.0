import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Programs } from "@/components/sections/programs";
import { Team } from "@/components/sections/team";
import { Impact } from "@/components/sections/impact";
import { GetInvolved } from "@/components/sections/get-involved";
import { Events } from "@/components/sections/events";
import { Stories } from "@/components/sections/stories";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <GetInvolved />
        <Events />
        <Stories />
        <Team />
        <Contact />
      </main>
    </>
  );
}
