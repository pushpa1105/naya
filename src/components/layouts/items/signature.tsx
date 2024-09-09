import Image from "next/image";

type SignatureProp = {
  src: string;
  customClassname?: string;
};

const Signature: React.FC<SignatureProp> = ({
  src,
  customClassname = "size-auto",
}) => {
  return (
    <Image
      src={src}
      alt="signature"
      width={55}
      height={30}
      className={customClassname}
    />
  );
};

export default Signature;
