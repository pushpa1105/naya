"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "@/components/layouts/items/logo";
import NavList from "@/components/layouts/nav/nav-list";
import { URLS } from "@/constants/urls";
import { cn } from "@/libs/utils";

type MenuTogglePropType = {
  openNav: Boolean;
  toggleMenu: Function;
};

const MenuToggle: React.FC<MenuTogglePropType> = ({ openNav, toggleMenu }) => {
  return (
    <div className="group relative" onClick={() => toggleMenu()}>
      <div
        className={cn(
          "absolute right-0 top-[5px] h-[2px] w-[25px] bg-white transition-all duration-300 ease-in-out",
          openNav && "rotate-45",
        )}
      ></div>
      <div
        className={cn(
          "absolute right-0 top-[15px] h-[2px] w-[16px] translate-x-0 translate-y-0 rotate-0 bg-white transition-all duration-300 ease-in-out",
          openNav && "top-[5px] -rotate-45 w-[25px]",
        )}
      ></div>
    </div>
  );
};

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className=" max-w-screen fixed flex w-full flex-row justify-between bg-black p-6 sm:hidden">
      <Link href={URLS.HOME}>
        <Logo />
      </Link>
      <MenuToggle openNav={openNav} toggleMenu={() => setOpenNav(!openNav)} />
      <div
        className={cn(
          "fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-black shadow-lg transform transition-transform duration-300 ease-in-out -translate-x-full",
          openNav && "translate-x-0",
        )}
      >
        <NavList />
      </div>
    </div>
  );
};

export default MobileNav;
