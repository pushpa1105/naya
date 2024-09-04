"use client";

import dynamic from "next/dynamic";
import React from "react";

import { cn } from "@/libs/utils";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const NayaPlayer: React.FC<NayaPlayerType> = (props) => {
  const {
    url,
    loop = true,
    controls = true,
    width = "100%",
    height = "100%",
    playing = false,
    volume = 0,
  } = props;
  return (
    <ReactPlayer
      url={url}
      loop={loop}
      controls={controls}
      width={width}
      height={height}
      playing={playing}
      volume={volume}
      className={cn(
        "m-auto h-auto flex !w-full justify-center",
        width !== "100%" && `!w-full md:w-[${width}]`,
      )}
      config={{
        youtube: {
          playerVars: { showinfo: 1, playsinline: 0, rel: 0 },
        },
      }}
    />
  );
};

export default NayaPlayer;
