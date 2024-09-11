import { type Hero } from "@/types/hero";

export const getHeroData = async () => {
  const res = await fetch(
    "https://aida-api.webiz.se/api/hero?populate[image][fields][0]=url&fields[0]=title&fields[1]=call_action&fields[2]=image_description",
  );

  const { data } = (await res.json()) as Hero;

  return data.attributes;
};
