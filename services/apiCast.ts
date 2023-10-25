import { fetchData } from "@/utils/fetchData";
import { BASE_URL } from "./apiUrl";
export const apiCast = async (id: string, mediaType: string) => {
  const url = `${BASE_URL}/${mediaType}/${id}/credits?language=en-US`;
  try {
    const res = await fetchData(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};
