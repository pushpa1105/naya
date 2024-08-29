"use client";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <nav className="fixed z-50">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
