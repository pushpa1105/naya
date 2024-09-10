import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";

import BlurLoad from "@/components/ui/blur-load";
import NayaPlayer from "@/components/video/naya-player";
import { URLS } from "@/constants/urls";
import { videoList } from "@/data/videos-data";
import { getThumbnailForYTVideos } from "@/utils/helpers";

type GalleryPageProps = {
  params: { video: string | number };
};

const GalleryPage: React.FC<GalleryPageProps> = ({ params }) => {
  const videoData = videoList.find(
    (x) => x.id.toString() === params.video,
  ) as VideoDataType;

  if (!videoData) redirect(URLS.VIDEOS);
  return (
    <BlurLoad>
      <div className="">
        <div className="flex justify-around">
          <div className="flex aspect-video size-auto flex-wrap">
            <NayaPlayer url={videoData.src} playerClassname="size-auto" />
            <div className="flex items-center p-4 md:mt-4 md:p-8">
              <h2 className="text-[1em] font-bold lg:text-[1.5em] lg:font-extrabold lg:leading-[5px] lg:tracking-[4px]">
                {videoData.title}
              </h2>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mt-16">
          <h3 className="mx-auto text-center text-[1.3em] font-extrabold tracking-[4px]">
            Explore More
          </h3>
          <div className="grid-col grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </BlurLoad>
  );
};

export default GalleryPage;
