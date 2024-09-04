import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import NayaPlayer from "@/components/video/naya-player";
import { cn } from "@/libs/utils";

import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-button";
import { DotButton, useDotButton } from "./carousel-nav";

type CarouselPropType = {
  items: NayaPlayerType[];
  options?: EmblaOptionsType;
  showCarouselControl?: boolean;
  viewportClassName?: string;
  containerClassName?: string;
  slideClassName?: string;
  controlClassName?: string;
  buttonClassName?: string;
  navClassName?: string;
};

const VideoCarousel: React.FC<CarouselPropType> = (props) => {
  const {
    items,
    options,
    showCarouselControl = true,
    viewportClassName = "overflow-hidden rounded-lg border border-dashed",
    containerClassName = "flex",
    slideClassName = "flex h-[30rem] min-w-0 flex-[0_0_100%] transform-gpu",
    controlClassName = "mb-16 flex justify-between",
    buttonClassName = "flex",
    navClassName = "border border-white rounded-full size-[10px] my-auto items-center",
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className={viewportClassName} ref={emblaRef}>
        <div className={containerClassName}>
          {items.map((item, index) => (
            <div className={slideClassName} key={index}>
              <NayaPlayer {...item} />
            </div>
          ))}
        </div>
      </div>
      {showCarouselControl && (
        <div className={controlClassName}>
          <div className={buttonClassName}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="flex flex-row gap-x-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={cn(
                  index === selectedIndex ? "bg-white" : "",
                  navClassName && navClassName,
                )}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCarousel;
