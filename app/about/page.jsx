import StorySection from "@/components/sections/about/StorySection";
import TeamSection from "@/components/sections/about/TeamSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "About Us | Lumière Interiors",
  description: "Learn about our mission, vision, and the team behind Lumière's luxury interior designs.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <TeamSection />
      <CtaBanner />
    </>
  );
}