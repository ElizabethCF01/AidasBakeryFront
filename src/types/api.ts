export type Resource<T> = {
  data: ResourceData<T>;
  meta: Meta;
};

export type ResourceData<T> = {
  id: number;
  attributes: T;
};

export type Hero = Resource<HeroAttributes>;
export type Info = Resource<InfoAttributes>;
export type About = Resource<AboutAttributes>;

export type HeroAttributes = {
  title: string;
  call_action: string;
  image_description: string;
  image: Resource<ImageAttributes>;
};

export type InfoAttributes = {
  info: string;
};

export type AboutAttributes = {
  title: string;
  description: string;
  invitation: string;
  image_description: string;
  image: Resource<ImageAttributes>;
};

export type ImageAttributes = {
  url: string;
};

export type Meta = {};
