import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure Sanity client
export const client = createClient({
  projectId: "3h2dagv2", // Hardcoded from your CLI output
  dataset: "production",
  apiVersion: "2023-05-03",
  token: "sk3dR0JdjXZgSgiQKTfTAEc7KuFapqImsutTSkgRO4uksKXNJu523aa0ypvgBAybuEDgN4nvSJCJl0K084DCO4nG8CdWNmd8N1y4r2agqueiE8T0AZkFjOAuehT4YwQ6MSmZEC9Eb3doGKzjV30jrvBQWIvtuwcFdFiEOs787QZhW7E6vZMD",
  useCdn: true, // Use CDN for public data
});

// Image URL builder for handling Sanity image fields
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}