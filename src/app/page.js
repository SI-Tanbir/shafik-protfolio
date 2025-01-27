import Adpage from "@/components/Adpage";
import Banner from "@/components/Banner";
import ProjectsSection from "@/components/ProjectsSection";
import ResponsiveSection from "@/components/ResponsiveSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>

   <Banner></Banner>
    <ResponsiveSection></ResponsiveSection>
   <Adpage></Adpage>
   <ProjectsSection></ProjectsSection>


   </div>
  );
}
