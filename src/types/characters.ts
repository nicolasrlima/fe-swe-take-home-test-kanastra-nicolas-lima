import type {
  ComicList,
  EventList,
  SeriesList,
  StoryList,
  Thumbnail,
  Url,
} from "./global";

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: Thumbnail;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
};

export type CharacterResponseData = {
  count: number;
  limit: number;
  offset: number;
  results: Array<Character>;
  total: number;
};
