"use client";

import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative flex items-center justify-center"
        >
            {theme === "light" ? (
                <LuMoon className="absolute scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            ) : (
                <LuSun className="absolute scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-90" />
            )}
        </Button>
    );
}
