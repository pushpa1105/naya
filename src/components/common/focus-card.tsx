"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import { cn } from "@/libs/utils";

type Card = {
  id: Number;
  title: string;
  src: string;
  redirectUrl: string;
  shortDesc: string;
};

export const FocusCard = React.memo(
  ({
    card,
    index,
    hovered,
  }: {
    card: Card;
    index: number;
    hovered: number;
  }) => (
    <div className={cn("relative h-full w-full")}>
      <div className="focus-card size-full">
        <Image
          src={card.src}
          alt="saebi"
          width="1000"
          height="1000"
          className={cn(
            "size-full object-cover group-hover/card:shadow-xl grayscale-[80%]",
            hovered === index && "grayscale-0",
          )}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 flex items-end py-8 px-4 transition-all ease-in-out duration-500 tracking-[2px] delay-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div>
          <div className="text-[18px] font-bold tracking-widest">
            {card.title}
          </div>
          <div className="mb-4 text-[16] ">{card.shortDesc}</div>
          <Link
            href={card.redirectUrl}
            className="flex flex-row items-center gap-x-2 text-[12px] hover:text-purple-500"
          >
            Learn More
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  ),
);

FocusCard.displayName = "Card";
