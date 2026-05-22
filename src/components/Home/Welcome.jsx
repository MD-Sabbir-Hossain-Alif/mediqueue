import React from "react";
import { ArrowRight, Play, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
    return (
        <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
                            <Users className="w-4 h-4" />
                            Trusted by 12,000+ Students
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground tracking-tighter">
                            Master Subject with{" "}
                            <span className="text-primary">Expert Tutors</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg">
                            Learn from verified and experienced tutors. Enjoy
                            personalized 1-on-1 tutoring for all subjects — from
                            Class 6 to 12, SSC, HSC, and University/Medical
                            Admission
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="tutors"
                                className="hover-primary flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/30"
                            >
                                Find a Tutor
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link href="add-tutor">
                                <button className="flex items-center gap-3 border border-border hover:bg-muted px-6 py-3 rounded-2xl font-semibold text-lg transition-all cursor-pointer">
                                    <Play className="w-5 h-5" />
                                    Become a Tutor
                                </button>
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex items-center gap-8 pt-6">
                            <div>
                                <p className="text-3xl font-bold text-primary">
                                    4.9/5
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Average Rating
                                </p>
                            </div>
                            <div className="h-9 w-px bg-border" />
                            <div>
                                <p className="text-3xl font-bold">500+</p>
                                <p className="text-sm text-muted-foreground">
                                    Expert Tutors
                                </p>
                            </div>
                            <div className="h-9 w-px bg-border" />
                            <div>
                                <p className="text-3xl font-bold">24/7</p>
                                <p className="text-sm text-muted-foreground">
                                    Availability
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block">
                        <div className="absolute -inset-10 bg-linear-to-br from-primary/20 to-accent/20 rounded-[4rem] -rotate-6" />

                        <div className="relative bg-card border border-border rounded-3xl shadow-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1659353222488-eee2b5022e56"
                                alt="Math Tutoring Session"
                                width={800}
                                height={600}
                                className="w-full h-130 object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-black/90 backdrop-blur-md p-5 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#90ccdf]/50 rounded-full flex items-center justify-center text-red-500 text-sm font-bold">
                                        LIVE
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Fahim Chowdhury
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Mathematics • 8 min ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
