"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { publicNavigations } from "@/data/navigations";
import { cn } from "@/libs/utils";

const NavList = () => {
  const currentRoute = usePathname();
  return (
    <ul className="flex size-full flex-col justify-center space-y-4 pl-8 text-[16px] font-semibold sm:size-auto sm:flex-row sm:space-x-4 sm:space-y-0 sm:pl-0">
      {publicNavigations.map((nav) => (
        <li key={nav.name}>
          <Link
            href={nav.path}
            className={cn(
              "tracking-[4px] hover:text-white hover:text-2xl transition-all duration-300 ease-in-out",
              nav.path === currentRoute
                ? "text-white line-through decoration-purple-500 text-4xl"
                : "text-gray-400",
            )}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
