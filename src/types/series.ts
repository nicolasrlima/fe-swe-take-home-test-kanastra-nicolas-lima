import type { Character } from "./characters";
import type {
  ComicList,
  CreatorList,
  EventList,
  Resource,
  StoryList,
  Thumbnail,
  Url,
} from "./global";

export type Series = {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<Url>;
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Thumbnail;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  characters: Array<Character>;
  creators: CreatorList;
  next: Resource;
  previous: Resource;
};

export type SeriesResponseData = {
  count: number;
  limit: number;
  offset: number;
  results: Array<Series>;
  total: number;
};
