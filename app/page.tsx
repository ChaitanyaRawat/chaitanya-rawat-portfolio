import Approach from "@/components/Approach";

import Education from "@/components/Education";
// import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import SkillSet from "@/components/SkillSet";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <SkillSet />
        <RecentProjects />
        <Education />
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
