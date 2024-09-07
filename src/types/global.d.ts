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
}

interface NayaPlayerType {
  url: string;
  loop?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  playing?: boolean;
  volume?: number;
}
