"use client";

import Image from "next/image";

import SocialHandles from "@/components/layouts/items/social-handles";
import { IZNA_BANNER } from "@/data/images";

import IznaProfile from "./_components/profile";

const ProfilePage = () => {
  return (
    <div className="relative mt-12">
      <h2 className="absolute left-[5px] top-5 flex justify-center text-[calc(9.25926vw+15.37px)] font-bold leading-[1.1em] text-black opacity-50 md:top-10">
        IZNA
      </h2>
      <Image
        src={IZNA_BANNER}
        alt="Izna Profile"
        width={1000}
        height={1000}
        quality={100}
        className="my-4 h-3/4 w-full rounded-lg"
        unoptimized
      />
      <SocialHandles />
      <IznaProfile />
    </div>
  );
};

export default ProfilePage;
