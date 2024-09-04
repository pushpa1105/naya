import { URLS } from "@/constants/urls";
import {
  JEEMIN_MAIN,
  JIYOON_MAIN,
  JUNGEUN_MAIN,
  KOKO_MAIN,
  MAI_MAIN,
  SAEBI_MAIN,
  SARANG_MAIN,
} from "@/data/images";

export const membersInfo: Member[] = [
  {
    id: 1,
    title: "Choi Jungeun",
    src: JUNGEUN_MAIN,
    redirectUrl: URLS.JUNGEUN,
    shortDesc: "South-Korean singer under WakeOne. #BabyCheetah #AllRounder",
  },
  {
    id: 2,
    title: "Bang Jeemin",
    src: JEEMIN_MAIN,
    redirectUrl: URLS.JEEMIN,
    shortDesc:
      "South-Korean singer under WakeOne. #FormerHYBETrainee #FormerHYBETrainee",
  },
  {
    id: 3,
    title: "Yoon Jiyoon",
    src: JIYOON_MAIN,
    redirectUrl: URLS.JIYOON,
    shortDesc:
      "South-Korean singer under WakeOne. #UniqueVoice #OnPointShoulders",
  },
  {
    id: 4,
    title: "Narai Koko",
    src: KOKO_MAIN,
    redirectUrl: URLS.KOKO,
    shortDesc:
      "Japanese singer under WakeOne. #LovelyDeer #ShinyLongFlowingHair",
  },
  {
    id: 5,
    title: "Ryu Sarang",
    src: SARANG_MAIN,
    redirectUrl: URLS.SARANG,
    shortDesc:
      "South-Korean singer under WakeOne. #FacialExpressionGenius #SmilePotato",
  },
  {
    id: 6,
    title: "Tomioka Mai",
    src: MAI_MAIN,
    redirectUrl: URLS.MAI,
    shortDesc:
      "Japanese singer under WakeOne. #CoolBeautyofJapan #No.1VisualPICKAmongTrainees",
  },
  {
    id: 7,
    title: "Jeong Sae Bi",
    src: SAEBI_MAIN,
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
