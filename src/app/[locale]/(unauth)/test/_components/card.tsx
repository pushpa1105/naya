import Image from "next/image";

type CarouselCardPropType = {
  member: Member;
};

const CarouselCard: React.FC<CarouselCardPropType> = (props) => {
  const { member } = props;
  return (
    <div className="h-full">
      <Image
        src={member.mainImageSrc}
        alt="saebi"
        width="1000"
        height="1000"
        className="size-full object-cover group-hover/card:shadow-xl"
      />
    </div>
  );
};

export default CarouselCard;
