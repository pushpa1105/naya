type MemberName =
  | "JUNGEUN"
  | "JEEMIN"
  | "JIYOON"
  | "SARANG"
  | "MAI"
  | "KOKO"
  | "SAEBI";

interface Member {
  id: number;
  title: string;
  src: string | StaticImageData;
  slug: MemberName;
  profileImageUrl: string | StaticImageData;
  redirectUrl: string;
  shortDesc: string;
  hashTags: Array<string>;
  homeTown: string;
  country: string;
  birthday: string;
  nativeName: string;
  bloodType: string;
  height: string;
  zodiacSign: string;
  mbti: string;
  favouriteAnimal: string;
  favouriteSeason: string;
  favouriteFruit: string;
  favouriteDessert: string;
  favouriteColor: string;
  funFacts: Array<string>;
  signature: string;
}

interface NayaPlayerType {
  url: string;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  playing?: boolean;
  volume?: number;
  playerClassname?: string;
}

interface GalleryImageType {
  id: number;
  src: string | StaticImageData;
  title: string;
  tags?: Array<string>;
}

interface VideoDataType {
  id: number;
  src: string;
  platform?: "Youtube" | "Others";
  title: string;
  description?: string;
  tags?: Array<string>;
}
