import Image from "next/image";

import { TBL_LOGO } from "@/data/images";

const TblLogo = () => {
  return (
    <Image
      src={TBL_LOGO}
      alt="TBL Logo"
      width={75}
      height={30}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default TblLogo;
