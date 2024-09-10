import Image from "next/image";
import Link from "next/link";

import BlurLoad from "@/components/ui/blur-load";
import { URLS } from "@/constants/urls";
import { imageList } from "@/data/gallery-data";

const GalleryPage = () => {
  return (
    <BlurLoad>
      {/* <div className="columns-1 gap-8 space-y-8 p-4 sm:columns-2 md:columns-3 lg:columns-4"> */}
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
    </BlurLoad>
  );
};

export default GalleryPage;
