"use client";

import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(session, isPending);
    return (
        <nav className="container mx-auto sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg ">
            <div className="">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex-1 flex items-center justify-start gap-3">
                        <Link href="/" className="text-2xl font-bold">
                            MediQueue
                        </Link>
                    </div>
                    <ul className="hidden md:flex items-center gap-4">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/tutors">Tutors</NavLink>
                        </li>
                        <li>
                            <NavLink href="/add-tutor">Add Tutor</NavLink>
                        </li>
                        <li>
                            <NavLink href="/my-booked-sessions">
                                My Booked Sessions
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex-1 flex items-center justify-end gap-4 font-medium">
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </header>
            </div>
        </nav>
    );
};

export default Navbar;
