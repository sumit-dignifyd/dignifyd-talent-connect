"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ label, path }) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`text-sm font-medium transition duration-300 ${
        isActive ? "text-purple-500" : "text-gray-300 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
