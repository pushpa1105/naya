import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/assets/images/izna/logo_transparent.png"}
      alt="Izna Logo"
      width={75}
      height={30}
      className="h-[30px] w-[55px]"
    />
  );
};

export default Logo;
