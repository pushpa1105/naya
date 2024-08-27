import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useState } from "react";

import { members } from "@/data/members";
import { cn } from "@/libs/utils";

import CarouselCard from "./card";

const MembersCarousel = () => {
  const [activeCard, setActiveCard] = useState(1);
  const options: EmblaOptionsType = {
    dragFree: true,
    align: "start",
    axis: "x",
  };
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full gap-x-2">
          {members.map((member, index) => (
            <div
              className={cn(
                "embla__slide h-full max-h-[70%] my-auto hover:max-h-full transition-all duration-500 ease-in-out cursor-pointer",
                member.id === activeCard && "max-h-full",
              )}
              key={index}
              onMouseOver={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(1)}
            >
              <CarouselCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersCarousel;
