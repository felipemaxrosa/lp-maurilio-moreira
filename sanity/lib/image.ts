import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

// Monta URLs do CDN de imagens do Sanity (cdn.sanity.io). Use com next/image:
//   urlFor(image).width(800).url()
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
