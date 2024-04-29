// import sanityClient from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url";
// const client = sanityClient({
//   projectId: "bkeewfcn",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// export default client;
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create a new Sanity client
const client = createClient({
  projectId: "bkeewfcn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

// Initialize the ImageUrlBuilder with the client
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
