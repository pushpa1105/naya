import { URLS } from "@/constants/urls";

export const membersInfo: Member[] = [
  {
    id: 1,
    title: "Choi Jungeun",
    src: "/assets/images/main/jungeun.jpeg",
    redirectUrl: URLS.JUNGEUN,
    shortDesc: "South-Korean singer under WakeOne. #BabyCheetah #AllRounder",
  },
  {
    id: 2,
    title: "Bang Jeemin",
    src: "/assets/images/main/jeemin.jpeg",
    redirectUrl: URLS.JEEMIN,
    shortDesc:
      "South-Korean singer under WakeOne. #FormerHYBETrainee #FormerHYBETrainee",
  },
  {
    id: 3,
    title: "Yoon Jiyoon",
    src: "/assets/images/main/jiyoon.jpeg",
    redirectUrl: URLS.JIYOON,
    shortDesc:
      "South-Korean singer under WakeOne. #UniqueVoice #OnPointShoulders",
  },
  {
    id: 4,
    title: "Narai Koko",
    src: "/assets/images/main/koko.jpeg",
    redirectUrl: URLS.KOKO,
    shortDesc:
      "Japanese singer under WakeOne. #LovelyDeer #ShinyLongFlowingHair",
  },
  {
    id: 5,
    title: "Ryu Sarang",
    src: "/assets/images/main/sarang.jpeg",
    redirectUrl: URLS.SARANG,
    shortDesc:
      "South-Korean singer under WakeOne. #FacialExpressionGenius #SmilePotato",
  },
  {
    id: 6,
    title: "Tomioka Mai",
    src: "/assets/images/main/mai.jpeg",
    redirectUrl: URLS.MAI,
    shortDesc:
      "Japanese singer under WakeOne. #CoolBeautyofJapan #No.1VisualPICKAmongTrainees",
  },
  {
    id: 7,
    title: "Jeong Sae Bi",
    src: "/assets/images/main/saebi.jpeg",
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
