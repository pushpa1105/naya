import Image from "next/image";

import { WAKEONE_LOGO } from "@/data/images";

const WakeOneLogo = () => {
  return (
    <Image
      src={WAKEONE_LOGO}
      alt="Wake One Logo"
      width={55}
      height={30}
      style={{ width: "55px", height: "30px" }}
    />
  );
};

export default WakeOneLogo;
