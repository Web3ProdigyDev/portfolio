import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure Sanity client
export const client = createClient({
  projectId: "3h2dagv2", // Hardcoded from your CLI output
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true, // Use CDN for public data
});

// Image URL builder for handling Sanity image fields
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}