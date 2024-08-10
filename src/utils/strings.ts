import type { Thumbnail } from "@/types/characters";

export const getThumbnailUrl = (thumbnail: Thumbnail) =>
  `${thumbnail.path}.${thumbnail.extension}`;
