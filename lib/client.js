import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lw4mbfa0",
  dataset: "production",
  apiVersion: "2022-10-17",
  useCdn: true,
  toker: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
