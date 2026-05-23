"use client";

import { useState, useMemo } from "react";
import { useTransition, animated } from "@react-spring/web";
import TutorCard from "./TutorCard";
import { Search } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TutorClient = ({ tutors }) => {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const filteredTutors = useMemo(() => {
        const searchTerm = search.trim().toLowerCase();

        return tutors.filter((tutor) => {
            const nameMatch = tutor.tutorName
                ?.toLowerCase()
                .includes(searchTerm);

            const filterStart = startDate ? new Date(startDate) : null;
            const filterEnd = endDate ? new Date(endDate) : null;

            // tutor session range
            const tutorStart = new Date(tutor.sessionStartDate);
            const tutorEnd = new Date(tutor.sessionEndDate);

            // overlap logic (IMPORTANT)
            const dateMatch =
                (!filterStart || tutorEnd >= filterStart) &&
                (!filterEnd || tutorStart <= filterEnd);

            return nameMatch && dateMatch;
        });
    }, [tutors, search, startDate, endDate]);

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
            <div className="text-center mb-3">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Our Best Tutors
                </h1>
                <p className="text-muted-foreground mt-3">
                    Find experienced tutors for Class 6 to 12, SSC, HSC &
                    Medical Admission
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-5 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div className="relative w-full md:col-span-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="w-5 h-5" />
                        </div>

                        <input
                            type="text"
                            placeholder="Search by tutor name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-card border border-border pl-12 pr-5 py-2 rounded-2xl"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <span className="text-foreground w-20">Start Date</span>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="flex-1 bg-card border border-border px-2 py-2 rounded-2xl"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <span className="text-foreground w-20">End Date</span>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="flex-1 bg-card border border-border px-2 py-2 rounded-2xl"
                        />
                    </div>
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
