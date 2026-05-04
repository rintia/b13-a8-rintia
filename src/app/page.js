import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import MarqueeSection from "@/components/MarqueeSection";
import StatsSection from "@/components/StatsSection";



export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSection></MarqueeSection>
      <Featured/>
      <HowItWorks/>
      <StatsSection/>
      
    </div>
  );
}
