"use client";

import { BookOpen } from "lucide-react";
import { useTransition, animated } from "@react-spring/web";
import TutorCard from "../Tutors/TutorCard";
import ScrollAnimation from "../Tutors/ScrollAnimation";

const Fetured = ({ tutors }) => {
    const transitions = useTransition(tutors, {
        keys: (tutor) => tutor._id,
        from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
        leave: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        trail: 80,
    });

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-4">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            Built for Future
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Available <span className="text-primary">Tutors</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The smartest way to connect with top tutors and ace your
                        exams.
                    </p>
                </div>

                {/* Tutors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transitions((style, tutor) => (
                        <animated.div style={style}>
                            <ScrollAnimation>
                                <TutorCard tutor={tutor} />
                            </ScrollAnimation>
                        </animated.div>
                    ))}
                </div>

                {/* Trust Bar */}
                <div className="mt-10 pt-10 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-6">
                        Trusted by university & medical students from
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-6 opacity-75">
                        <span className="text-lg md:text-2xl font-semibold">
                            DU
                        </span>
                        <span className="text-lg md:text-2xl font-semibold">
                            BUET
                        </span>
                        <span className="text-lg md:text-2xl font-semibold">
                            DMC
                        </span>
                        <span className="text-lg md:text-2xl font-semibold">
                            JU
                        </span>
                        <span className="text-lg md:text-2xl font-semibold">
                            RMC
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fetured;
