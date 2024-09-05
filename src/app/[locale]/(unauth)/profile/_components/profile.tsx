import Image from "next/image";
import { useEffect, useState } from "react";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IZNA_PROFILE } from "@/data/images";
import {
  PROFILE_CONTENT,
  PROFILE_CONTENT_THREE,
  PROFILE_CONTENT_TWO,
} from "@/data/profile";
import { cn } from "@/libs/utils";

import MembersCardSection from "./members-card";

const IznaProfile = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative my-4 flex justify-center">
        <h2
          className={cn(
            "right-[-15vw] top-[35vh] rotate text-[calc(9.25926vw+70.37px)] font-bold leading-[1.1em] opacity-10 transition-all duration-500 ease-in-out hover:opacity-40 md:right-0 md:top-[40vh]",
            active && "rotate-90 fixed",
          )}
        >
          Profile
        </h2>
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-x-12 transition-all duration-500 ease-in-out lg:flex-nowrap">
        <Image
          src={IZNA_PROFILE}
          alt="Izna Profile"
          width={1000}
          height={1000}
          quality={100}
          className="size-full rounded-lg lg:size-1/4"
          unoptimized
        />
        {active && (
          <div>
            <div className="px-2 text-center text-2xl leading-[1.1em] tracking-[4px] md:px-12">
              <TextGenerateEffect words={PROFILE_CONTENT} />
              <TextGenerateEffect startAfter={13} words={PROFILE_CONTENT_TWO} />
              <TextGenerateEffect
                startAfter={20}
                words={PROFILE_CONTENT_THREE}
              />
            </div>
            <MembersCardSection />
          </div>
        )}
      </div>
    </>
  );
};

export default IznaProfile;
