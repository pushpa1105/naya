import Image from "next/image";

import MembersCardSection from "@/components/common/members-card";
import Signature from "@/components/layouts/items/signature";
import { membersInfo } from "@/data/members";

import ProfileCard from "./_components/profile-card";

type MemberPageProps = {
  params: { member: string };
};

const MemberPage: React.FC<MemberPageProps> = ({ params }) => {
  const memberInfo = membersInfo.find(
    (x) => params.member === x.slug.toLowerCase(),
  ) as Member;
  return (
    <div className="p-4">
      <div className="mb-12 flex flex-wrap gap-y-8 lg:justify-center lg:gap-8">
        <div className="profile-card relative mx-auto flex flex-col lg:mx-0">
          <div className="absolute left-4 top-4 z-10 size-full border opacity-50"></div>
          <Image
            alt={memberInfo?.slug}
            src={memberInfo?.profileImageUrl}
            width={100}
            height={100}
            unoptimized
            className="relative z-20 size-auto max-h-[75vh] "
          />
          <div className="absolute bottom-[-15%] z-30 md:right-[-20%] md:rotate-[-30deg] lg:-right-1/4 lg:bottom-[-12%]">
            <Signature
              src={memberInfo.signature}
              customClassname="w-[60%] h-[20vh] md:w-[80%] md:h-[25vh] m-auto opacity-50]"
            />
          </div>
        </div>
        <ProfileCard member={memberInfo} />
      </div>
      <MembersCardSection delayFor={0} exclude={[params.member]} />
    </div>
  );
};

export default MemberPage;
