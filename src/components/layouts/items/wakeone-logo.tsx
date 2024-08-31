import Image from "next/image";

const WakeOneLogo = () => {
  return (
    <Image
      src={"/assets/images/main/wakeone-logo.svg"}
      alt="Wake One Logo"
      width={55}
      height={30}
      style={{ width: "55px", height: "30px" }}
    />
  );
};

export default WakeOneLogo;
