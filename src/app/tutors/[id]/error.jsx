"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h1 className="text-6xl font-bold text-foreground mb-4">
                    Oops!
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Something went wrong. Please try again later.
                </p>
                <Button asChild className="hover-primary">
                    <Link href="/">Return to Home</Link>
                </Button>
            </div>
        </div>
    );
}
