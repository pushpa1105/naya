import VideoCarousel from "@/components/carousels/video-carousel";
import { promoVideos } from "@/data/videos";

const PromoVideos = () => {
  return (
    <div className="relative mt-[8em] pb-14">
      <div className="absolute bottom-0 z-10 lg:bottom-20">
        <h2 className="text-[calc(9.25926vw+70.37px)] font-bold leading-[1.1em] opacity-10 lg:-rotate-90">
          IZNA
        </h2>
      </div>
      <section className="relative z-20 mx-auto my-8 max-w-4xl pb-8">
        <VideoCarousel items={promoVideos} />
      </section>
    </div>
  );
};

export default PromoVideos;
