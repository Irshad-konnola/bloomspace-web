import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url' // Changed this line

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2026-05-11',
  useCdn: false,
})

// Update the builder function name here too
const builder = createImageUrlBuilder(client) 

export function urlFor(source: any) {
  return builder.image(source)
}