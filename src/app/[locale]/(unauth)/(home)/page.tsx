"use client";
import MembersCarousel from "@/app/[locale]/(unauth)/(home)/_components/members-carousel";
import SocialHandles from "@/components/layouts/items/social-handles";
import NayaPlayer from "@/components/video/naya-player";

export default function HomePage() {
  const mainVideoUrl = "https://youtu.be/gebKzYQ2UAE?si=5R2rHT5kWy5JkzLY";
  return (
    <>
      <MembersCarousel />
      <div className="my-2 mb-4 lg:my-16">
        <SocialHandles />
      </div>
      <NayaPlayer url={mainVideoUrl} width="75%" />
    </>
  );
}
