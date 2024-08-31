import Image from "next/image";

const TblLogo = () => {
  return (
    <Image
      src={"/assets/images/main/tbl-logo.png"}
      alt="Wake One Logo"
      width={75}
      height={30}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default TblLogo;
