import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";

import BlurLoad from "@/components/ui/blur-load";
import { URLS } from "@/constants/urls";
import { videoList } from "@/data/videos-data";
import { getThumbnailForYTVideos } from "@/utils/helpers";

const GalleryPage = () => {
  return (
    <BlurLoad>
      <div className="grid-col grid gap-x-4 md:grid-cols-2 lg:grid-cols-4">
        {videoList.map((x, index) => (
          <Link
            href={URLS.VIDEO(x.id)}
            key={index}
            className="group relative m-2"
          >
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 flex-col font-bold opacity-0 transition duration-700 ease-in-out group-hover:opacity-100">
              <div className="md:text-md text-xs lg:text-lg">{x.title}</div>
              <FaCirclePlay className="m-auto mt-2 size-[15%]" />
            </div>
            <Image
              src={getThumbnailForYTVideos(x.src)}
              alt={x.title}
              width={1000}
              height={1000}
              className="h-auto cursor-pointer rounded-md group-hover:opacity-20"
            />
          </Link>
        ))}
      </div>
    </BlurLoad>
  );
};

export default GalleryPage;
