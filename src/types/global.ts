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

export type Creator = Resource & {
  role: string;
};

export type StoryList = ResourceList<Story>;

export type Event = Resource;

export type EventList = ResourceList<Event>;

export type Series = Resource;

export type SeriesList = ResourceList<Series>;

export type CreatorList = ResourceList<Creator>;
