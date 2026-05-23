"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[90vh] bg-background flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a4d_1px,transparent_1px),linear-gradient(to_bottom,#1e3a4d_1px,transparent_1px)] bg-size-[50px_50px] opacity-30" />

            <div className="relative z-10 text-center px-6 max-w-md">
                {/* 404 Number */}
                <h1 className="text-[9rem] md:text-[12rem] font-bold leading-none text-primary/10 tracking-tighter">
                    404
                </h1>

                <div className="mb-8">
                    <h2 className="text-4xl font-semibold text-foreground mb-3">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Sorry, the page you&apos;re looking for doesn&apos;t
                        exist or has been moved.
                    </p>
                </div>

                <Link href="/">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto hover-primary text-base px-8 py-6"
                    >
                        <Home className="mr-2 h-5 w-5 cursor-pointer" />
                        Back to Home
                    </Button>
                </Link>
            </div>

            {/* Bottom Illustration */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 font-mono">
                Tutor Platform • Something went wrong
            </div>
        </div>
    );
}
