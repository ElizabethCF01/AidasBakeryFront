import fetchApi from "@/lib/strapi";
import { type Team } from "@/types/api";

export const getTeamData = async () => {
  const res = await fetchApi<Team>({
    endpoint:
      "teams?populate[image][fields][0]=url&fields[0]=title&fields[1]=description",
  });

  return res.data;
};
