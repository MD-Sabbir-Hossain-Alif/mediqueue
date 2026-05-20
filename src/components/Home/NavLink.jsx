"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    // console.log("pathName", pathName);
    let isActive = false;

    if (href === "/") {
        // Home active on homepage AND category pages
        isActive = pathName === "/" || pathName.startsWith("/category/");
    } else {
        isActive = pathName === href;
    }
    return (
        <Link
            href={href}
            className={`font-medium hover:text-[#367e95] dark:hover:text-[#72cfff] ${isActive && "text-[#367e95] dark:text-[#72cfff] border-b-2 border-[#367e95] dark:border-[#72cfff]"}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
