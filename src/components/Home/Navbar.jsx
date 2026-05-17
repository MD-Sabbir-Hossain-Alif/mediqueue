import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <p className="font-bold">MediQueue</p>
                </div>
                <ul className="flex items-center gap-4">
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
        </nav>
    );
};

export default Navbar;
