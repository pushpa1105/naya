import Image from "next/image";

import { membersInfo } from "@/data/members";

const MemberPage = ({ params }: { params: { member: string } }) => {
  const memberInfo = membersInfo.find(
    (x) => params.member === x.slug.toLowerCase(),
  ) as Member;
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-8">
        <div className="relative mx-auto flex flex-col lg:mx-0">
          <div className="absolute left-4 top-4 z-10 size-full border opacity-50"></div>
          <Image
            alt={memberInfo?.slug}
            src={memberInfo?.profileImageUrl}
            width={100}
            height={100}
            unoptimized
            className="relative z-20 size-auto max-h-[75vh]"
          />
        </div>
        <div className="mx-auto flex">
          <h2 className="outline-text-white text-[5.25926vw] font-bold leading-[1.1em] opacity-50">
            {memberInfo.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
