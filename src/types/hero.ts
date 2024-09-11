export type Hero = {
  data: HeroData;
  meta: Meta;
};

export type HeroData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  call_action: string;
  image_description: string;
  image: Image;
};

export type Image = {
  data: ImageData;
};

export type ImageData = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  url: string;
};

export type Meta = {};
