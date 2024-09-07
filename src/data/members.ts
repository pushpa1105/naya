import { URLS } from "@/constants/urls";
import {
  JEEMIN_MAIN,
  JEEMIN_PROFILE,
  JIYOON_MAIN,
  JIYOON_PROFILE,
  JUNGEUN_MAIN,
  JUNGEUN_PROFILE,
  KOKO_MAIN,
  KOKO_PROFILE,
  MAI_MAIN,
  MAI_PROFILE,
  SAEBI_MAIN,
  SAEBI_PROFILE,
  SARANG_MAIN,
  SARANG_PROFILE,
} from "@/data/images";

export const membersInfo: Member[] = [
  {
    id: 1,
    title: "Choi Jungeun",
    src: JUNGEUN_MAIN,
    slug: "JUNGEUN",
    profileImageUrl: JUNGEUN_PROFILE,
    redirectUrl: URLS.JUNGEUN,
    shortDesc: "South-Korean singer under WakeOne. #BabyCheetah #AllRounder",
  },
  {
    id: 2,
    title: "Bang Jeemin",
    slug: "JEEMIN",
    src: JEEMIN_MAIN,
    profileImageUrl: JEEMIN_PROFILE,
    redirectUrl: URLS.JEEMIN,
    shortDesc:
      "South-Korean singer under WakeOne. #FormerHYBETrainee #FormerHYBETrainee",
  },
  {
    id: 3,
    title: "Yoon Jiyoon",
    slug: "JIYOON",
    src: JIYOON_MAIN,
    profileImageUrl: JIYOON_PROFILE,
    redirectUrl: URLS.JIYOON,
    shortDesc:
      "South-Korean singer under WakeOne. #UniqueVoice #OnPointShoulders",
  },
  {
    id: 4,
    title: "Narai Koko",
    slug: "KOKO",
    src: KOKO_MAIN,
    profileImageUrl: KOKO_PROFILE,
    redirectUrl: URLS.KOKO,
    shortDesc:
      "Japanese singer under WakeOne. #LovelyDeer #ShinyLongFlowingHair",
  },
  {
    id: 5,
    title: "Ryu Sarang",
    slug: "SARANG",
    src: SARANG_MAIN,
    profileImageUrl: SARANG_PROFILE,
    redirectUrl: URLS.SARANG,
    shortDesc:
      "South-Korean singer under WakeOne. #FacialExpressionGenius #SmilePotato",
  },
  {
    id: 6,
    title: "Tomioka Mai",
    slug: "MAI",
    src: MAI_MAIN,
    profileImageUrl: MAI_PROFILE,
    redirectUrl: URLS.MAI,
    shortDesc:
      "Japanese singer under WakeOne. #CoolBeautyofJapan #No.1VisualPICKAmongTrainees",
  },
  {
    id: 7,
    title: "Jeong Sae Bi",
    src: SAEBI_MAIN,
    slug: "SAEBI",
    profileImageUrl: SAEBI_PROFILE,
    redirectUrl: URLS.SAEBI,
    shortDesc:
      "South-Korean singer under WakeOne. #Longest-termTrainee #107cmLegs",
  },
];

export const membersInfoBasedOnDay = (): Member[] => {
  const today = new Date().getDay();
  const adjustedIndex = today % membersInfo.length;
  return membersInfo
    .slice(adjustedIndex)
    .concat(membersInfo.slice(0, adjustedIndex));
};
