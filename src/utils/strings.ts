import type { Thumbnail } from "@/types/global";

export const getThumbnailUrl = (thumbnail: Thumbnail) =>
  `${thumbnail.path}.${thumbnail.extension}`;
