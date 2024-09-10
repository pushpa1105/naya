import { URLS } from "@/constants/urls";

const galleryPattern = /^\/en\/gallery\/(\d+)$/;
const videosPattern = /^\/en\/videos\/(\d+)$/;

export const publicNavigations: PublicNavigationItem[] = [
  {
    name: "Izna",
    path: URLS.HOME,
    activePaths: [URLS.HOME],
    isActive: (route: string) => [URLS.HOME].includes(route),
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
    isActive: (route: string) =>
      [
        URLS.PROFILE,
        URLS.JEEMIN,
        URLS.JIYOON,
        URLS.JUNGEUN,
        URLS.KOKO,
        URLS.MAI,
        URLS.SAEBI,
        URLS.SARANG,
      ].includes(route),
  },
  {
    name: "Gallery",
    path: URLS.GALLERY,
    activePaths: [URLS.GALLERY],
    isActive: (route: string) =>
      [URLS.GALLERY].includes(route) || galleryPattern.test(route),
  },
  {
    name: "Videos",
    path: URLS.VIDEOS,
    activePaths: [URLS.VIDEOS],
    isActive: (route: string) =>
      [URLS.VIDEOS].includes(route) || videosPattern.test(route),
  },
];
