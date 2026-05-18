import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
    return (
        <nav className="container mx-auto sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg ">
            <div className="">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="font-bold">
                            MediQueue
                        </Link>
                    </div>
                    <ul className="flex items-center justify-center gap-4">
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
