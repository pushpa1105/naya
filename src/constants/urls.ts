const members = [
  "JUNGEUN",
  "JEEMIN",
  "JIYOON",
  "SARANG",
  "MAI",
  "KOKO",
  "SAEBI",
] as const;

const generateProfileUrl = () => {
  return Object.fromEntries(
    members.map((member: MemberName) => [
      member,
      `/en/${member.toLowerCase()}`,
    ]),
  ) as Record<MemberName, string>;
};

export const URLS = {
  HOME: "/en",
  PROFILE: "/en/profile",
  GALLERY: "/en/gallery",
  VIDEOS: "/en/videos",
  GALLERY_IMAGE: (id: string | number) => `/en/gallery/${id}`,
  VIDEO: (id: string | number) => `/en/videos/${id}`,
  ...generateProfileUrl(),
};

export const getUrlsInArray = () => {
  const values: Array<string> = [];
  Object.entries(URLS).forEach(([_, value]) => {
    if (typeof value === "string") values.push(value);
  });
  return values;
};
