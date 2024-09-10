import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import BlurLoad from "@/components/ui/blur-load";
import { URLS } from "@/constants/urls";
import { imageList } from "@/data/gallery-data";

type GalleryPageProps = {
  params: { image: string | number };
};

const GalleryPage: React.FC<GalleryPageProps> = ({ params }) => {
  const imageData = imageList.find(
    (x) => x.id.toString() === params.image,
  ) as GalleryImageType;

  if (!imageData) redirect(URLS.GALLERY);
  return (
    <BlurLoad>
      <div className="">
        <div className="m-auto my-12 flex size-fit justify-center">
          <div className="flex size-fit flex-row flex-wrap justify-center gap-8 rounded-xl shadow-lg shadow-slate-900">
            <Image
              src={imageData.src}
              alt={imageData.title}
              width={1000}
              height={1000}
              unoptimized
              className="size-auto cursor-zoom-in rounded-md"
            />
            <div className="flex items-center p-4 md:mt-4 md:p-8">
              <h2 className="text-[2em] font-normal leading-[0.5em] tracking-[4px]">
                {imageData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="tracking-[4px]] mx-auto text-center text-[1.3em] font-extrabold">
            Explore More
          </h3>
          <div className="columns-3xs">
            {imageList.map((x, index) => (
              <Link href={URLS.GALLERY_IMAGE(x.id)} key={index} className="m-2">
                <Image
                  src={x.src}
                  alt={x.title}
                  width={1000}
                  height={1000}
                  className="cursor-zoom-in rounded-md hover:opacity-50"
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
