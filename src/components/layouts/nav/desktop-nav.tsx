"use client";

import Link from "next/link";

import Logo from "@/components/layouts/items/logo";
import NavList from "@/components/layouts/nav/nav-list";
import { URLS } from "@/constants/urls";

const DesktopNav = () => {
  return (
    <div className="fixed hidden w-full flex-row justify-between p-6 px-12 sm:flex">
      <Link href={URLS.HOME}>
        <Logo />
      </Link>
      <NavList />
    </div>
  );
};

export default DesktopNav;
