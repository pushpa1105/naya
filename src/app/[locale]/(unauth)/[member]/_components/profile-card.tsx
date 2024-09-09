import React from "react";

import { cn } from "@/libs/utils";

interface ProfileCardProps {
  member: Member;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ member }) => {
  const profileInfo = [
    { label: "HomeTown", value: member.homeTown },
    { label: "Country", value: member.country },
  ];

  const details = [
    { key: "Full Name:", value: `${member.title} (${member.nativeName})` },
    { key: "Birth Date:", value: member.birthday },
    { key: "Zodiac:", value: member.zodiacSign },
    { key: "MBTI:", value: member.mbti },
    { key: "Height:", value: member.height },
    { key: "Favourite Color:", value: member.favouriteColor },
  ];

  return (
    <div className="md:ml-12 lg:ml-8">
      <ProfileHeader title={member.title} nativeName={member.nativeName} />
      <ProfileInfo info={profileInfo} />
      <DetailsList details={details} />
    </div>
  );
};

interface ProfileHeaderProps {
  title: string;
  nativeName: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title, nativeName }) => (
  <h2 className="outline-text-white mx-auto text-[4.25926vw] font-bold leading-[1.1em] opacity-50">
    {title}-({nativeName})
  </h2>
);

interface ProfileInfoProps {
  info: Array<{ label: string; value: string }>;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ info }) => (
  <div className="mt-8 flex flex-col gap-2">
    {info.map(({ label, value }, index) => (
      <React.Fragment key={index}>
        <div className="mb-8 flex flex-col gap-2 text-2xl font-bold leading-[1em]">
          <div className="opacity-70">{label}</div>
          <div className="opacity-40">{value}</div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

interface DetailsListProps {
  details: Array<{ key: string; value: string }>;
}

const DetailsList: React.FC<DetailsListProps> = ({ details }) => (
  <div className="mt-8 flex flex-col gap-4">
    {details.map(({ key, value }, index) => (
      <Row key={index} label={key} value={value} />
    ))}
  </div>
);

interface RowProps {
  label: string;
  value: string;
}

const Row: React.FC<RowProps> = ({ label, value }) => (
  <div className={cn("flex items-center gap-x-8")}>
    <div className={cn("text-xl font-bold")}>{label}</div>
    <div className={cn("text-xl")}>{value}</div>
  </div>
);

export default ProfileCard;
