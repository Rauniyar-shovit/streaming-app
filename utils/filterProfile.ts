import { profileImageSources } from "@/constants";

export function chooseProfile(usedProfiles: any) {
  if (!usedProfiles) {
    usedProfiles = [];
  }
  const usedProfileImagesArr = usedProfiles.map(
    (profile: any) => profile.image
  );
  const profileChoicesArr = profileImageSources.filter(
    (profile: any) => !usedProfileImagesArr.includes(profile)
  );

  return profileChoicesArr;
}
