import fetchApi from "@/lib/strapi";
import { type Hero } from "@/types/hero";

export const getHeroData = async () => {
  const res = await fetchApi<Hero>({
    endpoint:
      "hero?populate[image][fields][0]=url&fields[0]=title&fields[1]=call_action&fields[2]=image_description",
    // query: {
    //   populate: "deep", TODO: maybe use the deep plugin in strapi
    // },
  });

  return res.data.attributes;
};
