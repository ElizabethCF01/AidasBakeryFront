import fetchApi from "@/lib/strapi";
import { type About } from "@/types/api";

export const getAboutData = async () => {
  const res = await fetchApi<About>({
    endpoint:
      "about?populate[image][fields][0]=url&fields[0]=title&fields[1]=description&fields[2]=invitation&fields[3]=image_description",
    // query: {
    //   populate: "deep", TODO: maybe use the deep plugin in strapi
    // },
  });

  return res.data.attributes;
};
