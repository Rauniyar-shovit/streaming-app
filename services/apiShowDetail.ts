import { fetchData } from "@/utils/fetchData";
import { BASE_URL } from "./apiUrl";

export const apiShowDetail = async (id: string, mediaType: string) => {
  const url = `${BASE_URL}/${mediaType}/${id}?language=en-US`;

  try {
    const res = await fetchData(url);

    return res;
  } catch (err) {
    console.log(err);
  }
};
