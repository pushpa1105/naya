import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState } from "react";

import { FocusCard } from "@/components/common/focus-card";
import { membersInfoBasedOnDay } from "@/data/members";
import { cn } from "@/libs/utils";

const MembersCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const options: EmblaOptionsType = {
    dragFree: false,
    align: "start",
    axis: "x",
    skipSnaps: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("slidesInView", () => {
      const activeSlide = emblaApi.slidesInView();
      if (activeSlide.length === 1) setActiveCard(activeSlide[0]);
    });
  }, [emblaApi]);

  const computedMembersData = membersInfoBasedOnDay();

  return (
    <section className="h-full overflow-hidden [overflow-y:overlay]">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-[95%] gap-x-2 lg:h-full">
          {computedMembersData.map((member, index) => (
            <div
              className={cn(
                "h-full max-h-full my-auto hover:max-h-full transition-all duration-500 ease-in-out cursor-pointer flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3%] lg:flex-auto lg:max-h-[75%]",
                index === activeCard && "max-h-full lg:max-h-full",
              )}
              key={index}
              onMouseOver={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(0)}
            >
              <FocusCard card={member} index={index} hovered={activeCard} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersCarousel;
