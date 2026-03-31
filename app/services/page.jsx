import ServicesList from "@/components/sections/services/ServicesList";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Our Services | Lumière Interiors",
  description: "Comprehensive interior design services including residential, commercial, renovation, and custom furniture.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesList />
      <CtaBanner />
    </>
  );
}