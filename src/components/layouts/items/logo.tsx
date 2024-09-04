import Image from "next/image";

import { IZNA_LOGO } from "@/data/images";

const Logo = () => {
  return (
    <Image
      src={IZNA_LOGO}
      alt="Izna Logo"
      width={55}
      height={30}
      style={{ width: "55px", height: "30px" }}
    />
  );
};

export default Logo;
