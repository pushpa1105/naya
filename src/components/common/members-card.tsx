"use client";

import { useState } from "react";

import { FocusCard } from "@/components/common/focus-card";
import { membersInfo } from "@/data/members";
import { cn } from "@/libs/utils";

type MembersCardSectionProps = {
  delayFor?: number;
  exclude?: Array<string>;
};

const MembersCardSection: React.FC<MembersCardSectionProps> = ({
  delayFor = 28,
  exclude = [],
}) => {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, delayFor * 1000);
  return (
    <>
      {active && (
        <div>
          <h2 className="outline-text-white my-4 flex justify-center text-[calc(9.25926vw+10.37px)] font-bold leading-[1.1em] text-transparent opacity-50">
            MEMBERS
          </h2>
          <div className="mt-8 flex flex-[0_0_50%] flex-wrap justify-center gap-4 lg:flex-[0_0_25%]">
            {membersInfo
              .filter((x) => !exclude.includes(x.slug.toLowerCase()))
              .map((member, index) => (
                <div
                  className={cn(
                    "ransition-all duration-500 ease-in-out cursor-pointer min-w-[236px] h-[103px] rounded-lg",
                  )}
                  key={index}
                >
                  <FocusCard
                    card={member}
                    titleOnly
                    imageClassname="rounded-lg grayscale-0"
                    containerClassname="hover:opacity-60"
                    contentClassname="opacity-100 p-2"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MembersCardSection;
