import axios from "axios";

export async function fetchData(url: string) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer  ${process.env.API_KEY}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
