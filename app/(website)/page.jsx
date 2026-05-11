import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { client } from "@/lib/sanity";

// This is the GROQ query to get your data
async function getProjects() {
  const query = `*[_type == "project" && isFeatured == true] | order(_createdAt desc) [0...4] {
    _id,
    title,
    category,
    mainImage,
    "colSpan": colSpan // Optional: if you added this field to schema
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const projects = await getProjects(); // Fetching on the server

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects projects={projects} /> {/* Passing data as prop */}
      <Testimonials />
      <CtaBanner />
    </>
  );
}