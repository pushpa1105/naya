import { useState } from "react";
import { IconContext } from "react-icons";

import TblLogo from "@/components/layouts/items/tbl-logo";
import WakeOneLogo from "@/components/layouts/items/wakeone-logo";
import CrossLine from "@/components/ui/cross-line";
import { LinkPreview } from "@/components/ui/link-preview";
import { TBL_PREVIEW, WAKEONE_PREVIEW } from "@/data/images";
import { SNS, TBL_WEBSITE, WAKEONE_WEBSITE } from "@/data/social-links";
import { transformToArray } from "@/utils/helpers";

const IznaSocials = () => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <div className="w-auto flex-row justify-center">
        <div className="corner-borders m-auto flex w-fit flex-row gap-x-6 p-2 px-4">
          {transformToArray(SNS).map(
            ({ name, url, icon: Icon, previewImageUrl }) => (
              <LinkPreview
                key={name}
                url={url}
                imageSrc={previewImageUrl}
                className={"text-white hover:text-purple-400"}
              >
                <Icon />
              </LinkPreview>
            ),
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
};

const SocialHandles = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="align-center m-auto flex justify-between gap-x-4"
      onMouseOver={() => setHovered(true)}
      onScroll={() => setHovered(true)}
      onMouseOut={() =>
        setTimeout(() => {
          setHovered(false);
        }, 1000)
      }
    >
      <LinkPreview
        url={WAKEONE_WEBSITE}
        imageSrc={WAKEONE_PREVIEW}
        className={"flex items-center text-white"}
      >
        <WakeOneLogo />
      </LinkPreview>
      <CrossLine
        hovered={hovered}
        customClass="flex items-center justify-center"
      />
      <IznaSocials />
      <CrossLine
        hovered={hovered}
        customClass="flex items-center justify-center"
      />
      <LinkPreview
        imageSrc={TBL_PREVIEW}
        url={TBL_WEBSITE}
        className={"flex items-center text-white"}
      >
        <TblLogo />
      </LinkPreview>
    </div>
  );
};

export default SocialHandles;
