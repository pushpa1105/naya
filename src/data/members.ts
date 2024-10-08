import { URLS } from "@/constants/urls";
import {
  JEEMIN_MAIN,
  JEEMIN_PROFILE,
  JEEMIN_SIGNATURE,
  JIYOON_MAIN,
  JIYOON_PROFILE,
  JIYOON_SIGNATURE,
  JUNGEUN_MAIN,
  JUNGEUN_PROFILE,
  JUNGEUN_SIGNATURE,
  KOKO_MAIN,
  KOKO_PROFILE,
  KOKO_SIGNATURE,
  MAI_MAIN,
  MAI_PROFILE,
  MAI_SIGNATURE,
  SAEBI_MAIN,
  SAEBI_PROFILE,
  SAEBI_SIGNATURE,
  SARANG_MAIN,
  SARANG_PROFILE,
  SARANG_SIGNATURE,
} from "@/data/images";

export const membersInfo: Member[] = [
  {
    id: 1,
    title: "Choi Jungeun",
    src: JUNGEUN_MAIN,
    slug: "JUNGEUN",
    profileImageUrl: JUNGEUN_PROFILE,
    signature: JUNGEUN_SIGNATURE,
    redirectUrl: URLS.JUNGEUN,
    shortDesc: "South-Korean singer under WakeOne. #BabyCheetah #AllRounder",
    hashTags: ["#BabyCheetah", "#AllRounder"],
    homeTown: "Jung-gu, Incheon",
    country: "South Korea",
    nativeName: "최정은",
    birthday: "Aug 4, 2007",
    bloodType: "-",
    height: "170cm",
    zodiacSign: "Leo",
    mbti: "ISFJ",
    favouriteAnimal: "Baby cheetah",
    favouriteSeason: "Summer",
    favouriteFruit: "Strawberry",
    favouriteDessert: "yogurt",
    favouriteColor: "Black",
    funFacts: [
      "Her special ability is that she can't tidy up her bangs​​​​​​.",
    ],
  },
  {
    id: 2,
    title: "Bang Jeemin",
    slug: "JEEMIN",
    src: JEEMIN_MAIN,
    profileImageUrl: JEEMIN_PROFILE,
    signature: JEEMIN_SIGNATURE,
    redirectUrl: URLS.JEEMIN,
    shortDesc:
      "South-Korean singer under WakeOne. #FormerHYBETrainee #DebutRetry",
    hashTags: ["#FormerHYBETrainee", "#DebutRetry"],
    homeTown: "Saha-Gu, Busan",
    country: "South Korea",
    nativeName: "방지민",
    birthday: "May 08, 2005",
    bloodType: "B",
    height: "173cm",
    zodiacSign: "Taurus",
    mbti: "INFP",
    favouriteAnimal: "Dog",
    favouriteSeason: "Spring",
    favouriteFruit: "Watermelon",
    favouriteDessert: "Yakgwa Financier",
    favouriteColor: "Sky Blue",
    funFacts: [
      "Her special abilities are arm rope jump and laughing like SpongeBob. ",
    ],
  },
  {
    id: 3,
    title: "Yoon Jiyoon",
    slug: "JIYOON",
    src: JIYOON_MAIN,
    profileImageUrl: JIYOON_PROFILE,
    signature: JIYOON_SIGNATURE,
    redirectUrl: URLS.JIYOON,
    shortDesc:
      "South-Korean singer under WakeOne. #UniqueVoice #OnPointShoulders",
    hashTags: ["#UniqueVoice", "#OnPointShoulders"],
    homeTown: "South Korea",
    country: "South Korea",
    nativeName: "윤지윤",
    birthday: "Jul 14, 2005",
    bloodType: "-",
    height: "173cm",
    zodiacSign: "Cancer",
    mbti: "INFP",
    favouriteAnimal: "Dog",
    favouriteSeason: "Winter",
    favouriteFruit: "Watermelon",
    favouriteDessert: "Pistachio ice-cream",
    favouriteColor: "Black",
    funFacts: ["Her special ability is impersonating the producer 24."],
  },
  {
    id: 4,
    title: "Narai Koko",
    slug: "KOKO",
    src: KOKO_MAIN,
    signature: KOKO_SIGNATURE,
    profileImageUrl: KOKO_PROFILE,
    redirectUrl: URLS.KOKO,
    shortDesc:
      "Japanese singer under WakeOne. #LovelyDeer #ShinyLongFlowingHair",
    hashTags: ["#LovelyDeer", "#ShinyLongFlowingHair"],
    homeTown: "Osaka",
    country: "Japan",
    nativeName: "奈良井ここ",
    birthday: "Nov 14, 2006",
    bloodType: "-",
    height: "173cm",
    zodiacSign: "Scorpio",
    mbti: "ESFJ",
    favouriteAnimal: "Dog",
    favouriteSeason: "Autumn",
    favouriteFruit: "Shine Muskets",
    favouriteDessert: "Chocolate ice-cream",
    favouriteColor: "Purple",
    funFacts: [
      "Her special ability is running outside without making a sound.",
    ],
  },
  {
    id: 5,
    title: "Ryu Sarang",
    slug: "SARANG",
    src: SARANG_MAIN,
    signature: SARANG_SIGNATURE,
    profileImageUrl: SARANG_PROFILE,
    redirectUrl: URLS.SARANG,
    shortDesc:
      "South-Korean singer under WakeOne. #FacialExpressionGenius #SmilePotato",
    hashTags: ["#FacialExpressionGenius", "#SmilePotato"],
    homeTown: "Yeongdo-gu, Busan",
    country: "South Korea",
    nativeName: "유사랑",
    birthday: "Apr 18, 2007",
    bloodType: "-",
    height: "173cm",
    zodiacSign: "Aries",
    mbti: "INFP",
    favouriteAnimal: "Dog",
    favouriteSeason: "Autumn",
    favouriteFruit: "Mango",
    favouriteDessert: "Chocolate ice-cream",
    favouriteColor: "Sky Blue & purple",
    funFacts: ["Her special ability is that she is an owl wink master."],
  },
  {
    id: 6,
    title: "Tomioka Mai",
    slug: "MAI",
    src: MAI_MAIN,
    signature: MAI_SIGNATURE,
    profileImageUrl: MAI_PROFILE,
    redirectUrl: URLS.MAI,
    shortDesc:
      "Japanese singer under WakeOne. #CoolBeautyofJapan #No.1VisualPICKAmongTrainees",
    hashTags: ["#CoolBeautyofJapan", "#No.1VisualPICKAmongTrainees"],
    homeTown: "Japan",
    country: "Japan",
    nativeName: "冨岡まい",
    birthday: "Oct 28, 2004",
    bloodType: "B",
    height: "173cm",
    zodiacSign: "Scorpio",
    mbti: "ISTP",
    favouriteAnimal: "Dog",
    favouriteSeason: "Winter",
    favouriteFruit: "Watermelon",
    favouriteDessert: "Yogurt ice-cream",
    favouriteColor: "Hot Pink",
    funFacts: ["Her special abilities are knitting and cooking."],
  },
  {
    id: 7,
    title: "Jeong Sae Bi",
    src: SAEBI_MAIN,
    slug: "SAEBI",
    signature: SAEBI_SIGNATURE,
    profileImageUrl: SAEBI_PROFILE,
    redirectUrl: URLS.SAEBI,
    shortDesc:
      "South-Korean singer under WakeOne. #Longest-termTrainee #107cmLegs",
    hashTags: ["#Longest-termTrainee", "#107cmLegs"],
    homeTown: "Yeongdeungpo-gu, Seoul",
    country: "South Korea",
    nativeName: "정세비",
    birthday: "May 08, 2005",
    bloodType: "-",
    height: "172cm",
    zodiacSign: "Aquarius",
    mbti: "ENFP",
    favouriteAnimal: "Dog",
    favouriteSeason: "Spring",
    favouriteFruit: "Apple",
    favouriteDessert: "Chocolate ice-cream",
    favouriteColor: "Red & Pink",
    funFacts: [
      `Her special ability is "dog-legged dance" with long legs of 107 cm.`,
    ],
  },
];

export const membersInfoBasedOnDay = (): Member[] => {
  const today = new Date().getDay();
  const adjustedIndex = today % membersInfo.length;
  return membersInfo
    .slice(adjustedIndex)
    .concat(membersInfo.slice(0, adjustedIndex));
};
