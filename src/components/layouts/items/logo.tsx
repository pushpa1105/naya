import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/assets/images/izna/logo_transparent.png"}
      alt="Izna Logo"
      width={55}
      height={30}
      style={{ width: "55px", height: "30px" }}
    />
  );
};

export default Logo;
