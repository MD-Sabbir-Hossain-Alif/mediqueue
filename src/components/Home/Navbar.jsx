"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // console.log(session, isPending);
    return (
        <nav className="container mx-auto sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg ">
            <div className="">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex-1 flex items-center justify-start gap-3">
                        <Link
                            href="/"
                            className="text-2xl font-bold hover:text-[#367e95] dark:hover:text-[#72cfff]"
                        >
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
                            <NavLink href="/my-tutors">My Tutors</NavLink>
                        </li>
                        <li>
                            <NavLink href="/my-booked-sessions">
                                My Booked Sessions
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex-1 flex items-center justify-end gap-3 font-medium">
                        {isPending ? (
                            <Spinner />
                        ) : user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={
                                                    user?.image ||
                                                    "https://github.com/shadcn.png"
                                                }
                                                alt={user?.name}
                                            />
                                            <AvatarFallback>
                                                {user?.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="bottom" align="end">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            {user?.name}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/profile">Profile</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem
                                            variant="destructive"
                                            onClick={async () =>
                                                await authClient.signOut()
                                            }
                                        >
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <li>
                                    <NavLink href="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/register">Register</NavLink>
                                </li>
                            </>
                        )}
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
