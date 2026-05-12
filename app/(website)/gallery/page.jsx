import GalleryGrid from "../../../components/sections/gallery/GalleryGrid";
import { client } from "@/lib/sanity";

// This ensures the page stays fresh when the client updates Sanity
export const dynamic = 'force-dynamic';

async function getAllProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    category,
    mainImage
  }`;
  return await client.fetch(query);
}

export default async function GalleryPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <GalleryGrid initialProjects={projects} />
    </main>
  );
}