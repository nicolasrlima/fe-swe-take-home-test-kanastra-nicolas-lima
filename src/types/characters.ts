export type Url = {
  type: string;
  url: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type Resource = {
  resourceURI: string;
  name: string;
};

export type ResourceList<T = unknown> = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<T>;
};

export type Comic = Resource;

export type ComicList = ResourceList<Comic>;

export type Story = Resource & {
  type: string;
};

export type StoryList = ResourceList<Story>;

export type Event = Resource;

export type EventList = ResourceList<Event>;

export type Series = Resource;

export type SeriesList = ResourceList<Series>;

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
