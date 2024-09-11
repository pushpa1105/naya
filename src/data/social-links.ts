import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

import {
  IZNA_IG_PREVIEW,
  IZNA_TIKTOK_PREVIEW,
  IZNA_X_PREVIEW,
  IZNA_YT_PREVIEW,
} from "./images";

export const SNS = {
  TWITTER: {
    url: "https://x.com/izna_offcl",
    previewImageUrl: IZNA_X_PREVIEW,
    icon: FaTwitter,
  },
  YOUTUBE: {
    url: "https://www.youtube.com/@izna_offcl",
    previewImageUrl: IZNA_YT_PREVIEW,
    icon: FaYoutube,
  },
  TIKTOK: {
    url: "https://www.tiktok.com/@izna_offcl?lang=en",
    previewImageUrl: IZNA_TIKTOK_PREVIEW,
    icon: FaTiktok,
  },
  INSTAGRAM: {
    url: "https://www.instagram.com/izna_offcl/?hl=en",
    previewImageUrl: IZNA_IG_PREVIEW,
    icon: FaInstagram,
  },
};

export const TBL_WEBSITE = "https://theblacklabel.com/";
export const WAKEONE_WEBSITE = "https://wake-one.com/en/home/";
