export type Resource<T> = {
  data: T;
  meta: Meta;
};

export type ResourceData<T> = {
  id: number;
  attributes: T;
};

export type Hero = Resource<ResourceData<HeroAttributes>>;
export type Info = Resource<ResourceData<InfoAttributes>>;
export type About = Resource<ResourceData<AboutAttributes>>;
export type Team = Resource<ResourceData<TeamAttributes>[]>;

export type HeroAttributes = {
  title: string;
  call_action: string;
  image_description: string;
  image: Resource<ResourceData<ImageAttributes>>;
};

export type InfoAttributes = {
  info: string;
};

export type AboutAttributes = {
  title: string;
  description: string;
  invitation: string;
  image_description: string;
  image: Resource<ResourceData<ImageAttributes>>;
};

export type TeamAttributes = {
  title: string;
  description: string;
  image: Resource<ResourceData<ImageAttributes>>;
};

export type ImageAttributes = {
  url: string;
};

export type Meta = {
  pagination?: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
