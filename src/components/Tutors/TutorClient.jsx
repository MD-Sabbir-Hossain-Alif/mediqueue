"use client";

import { useState, useMemo } from "react";
import { useTransition, animated } from "@react-spring/web";
import TutorCard from "./TutorCard";
import { Search } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TutorClient = ({ tutors }) => {
    const [search, setSearch] = useState("");

    const filteredTutors = useMemo(() => {
        return tutors.filter((tutor) => {
            const searchTerm = search.toLowerCase();
            return (
                tutor.name?.toLowerCase().includes(searchTerm) ||
                tutor.subjects?.some((sub) =>
                    sub.toLowerCase().includes(searchTerm),
                ) ||
                tutor.location?.toLowerCase().includes(searchTerm) ||
                tutor.bio?.toLowerCase().includes(searchTerm)
            );
        });
    }, [tutors, search]);

    // Scroll + Filter Animation
    const transitions = useTransition(filteredTutors, {
        keys: (tutor) => tutor._id,
        from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
        leave: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        trail: 80,
    });

    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Our Best Tutors
                </h1>
                <p className="text-muted-foreground mt-3">
                    Find experienced tutors for Class 6 to 12, SSC, HSC &
                    Medical Admission
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-5 px-4">
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by tutor name, subject, or location..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-card border border-border pl-12 pr-5 py-4 rounded-2xl focus:outline-none focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Animated Tutors Grid */}
            {filteredTutors.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 pb-16">
                    {transitions((style, tutor) => (
                        <animated.div style={style}>
                            <ScrollAnimation>
                                <TutorCard tutor={tutor} />
                            </ScrollAnimation>
                        </animated.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-muted-foreground">
                        No tutors found matching your search.
                    </p>
                    <button
                        onClick={() => setSearch("")}
                        className="mt-4 text-primary hover:underline"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </>
    );
};

export default TutorClient;
