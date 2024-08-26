"use client";

import Link from "next/link";

const navList = [
  {
    name: "Members",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Career",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <div className="fixed flex w-full flex-row justify-between p-6">
      <div>IZNA</div>
      <ul className="flex flex-row space-x-4 text-[16px] font-semibold">
        {navList.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.path} className="tracking-[4px]">
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
