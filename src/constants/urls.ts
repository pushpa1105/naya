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
  GALLERY_IMAGE: (id: string | number) => `/en/gallery/${id}`,
  ...generateProfileUrl(),
};
