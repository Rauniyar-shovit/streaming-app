import { fetchData } from "@/utils/fetchData";
import { ALL_MOVIES_URL } from "./apiUrl";

export const apiShowsList = async () => {
  try {
    const res = await fetchData(ALL_MOVIES_URL);
    const { results: movies } = res;

    return movies;
  } catch (err) {
    console.log(err);
  }
};
