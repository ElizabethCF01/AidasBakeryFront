import fetchApi from "@/lib/strapi";
import { type Info } from "@/types/api";

export const getInfoData = async () => {
  const res = await fetchApi<Info>({
    endpoint: "info?fields[0]=info",
    // query: {
    //   populate: "deep", TODO: maybe use the deep plugin in strapi
    // },
  });

  return res.data.attributes;
};
