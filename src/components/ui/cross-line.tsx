import { cn } from "@/libs/utils";

type MenuTogglePropType = {
  hovered: boolean;
  customClass?: string;
};

const CrossLine: React.FC<MenuTogglePropType> = ({
  hovered,
  customClass = "",
}) => {
  return (
    <div
      className={cn("group relative items-center m-auto w-[15%]", customClass)}
    >
      <div
        className={cn(
          "absolute top-[5px] h-[2px] w-full bg-white transition-all duration-700 ease-in-out",
          hovered && "rotate-45 w-[10px] md:w-[25px] ",
        )}
      ></div>
      <div
        className={cn(
          "absolute top-[5px] h-[2px] w-full translate-x-0 translate-y-0 rotate-0 bg-white transition-all duration-700 ease-in-out",
          hovered && "-rotate-45 w-[10px] md:w-[25px]",
        )}
      ></div>
    </div>
  );
};

export default CrossLine;
