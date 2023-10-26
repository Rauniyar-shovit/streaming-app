import axios from "axios";

export async function fetchProfiles(
  email: string,
  // path: string = "http://127.0.0.1:3000/api/fetchProfiles"
  path: string = "/api/fetchProfiles"
) {
  try {
    const {
      data: { profiles },
    } = await axios.post(path, {
      email,
    });

    return profiles;
  } catch (err) {
    console.log(err);
  }
}
