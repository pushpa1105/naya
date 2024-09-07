import { URLS } from "@/constants/urls";

export const publicNavigations: PublicNavigationItem[] = [
  {
    name: "Izna",
    path: URLS.HOME,
    activePaths: [URLS.HOME],
  },
  {
    name: "Profile",
    path: URLS.PROFILE,
    activePaths: [
      URLS.PROFILE,
      URLS.JEEMIN,
      URLS.JIYOON,
      URLS.JUNGEUN,
      URLS.KOKO,
      URLS.MAI,
      URLS.SAEBI,
      URLS.SARANG,
    ],
  },
  {
    name: "Career",
    path: "/",
    activePaths: ["/"],
  },
];
