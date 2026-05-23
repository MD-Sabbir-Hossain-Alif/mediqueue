"use client";

import { useRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import TutorCard from "./TutorCard";
import { Search } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TutorClient = ({ tutors: initialTutors }) => {
    const [tutors, setTutors] = useState(initialTutors);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const abortRef = useRef(null);

    const searchTutors = async (value, start, end) => {
        const controller = new AbortController();

        if (abortRef.current) {
            abortRef.current.abort();
        }

        abortRef.current = controller;

        try {
            const query = new URLSearchParams({
                name: value,
                startDate: start,
                endDate: end,
            });

            const res = await fetch(`http://localhost:5000/search?${query}`, {
                signal: controller.signal,
            });

            if (!res.ok) return;

            const data = await res.json();
            setTutors(data);
        } catch (err) {
            if (err.name === "AbortError") return;
        }
    };

    const handleSearch = (value) => {
        setSearch(value);

        if (!value && !startDate && !endDate) {
            setTutors(initialTutors);
            return;
        }

        searchTutors(value, startDate, endDate);
    };

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);

        if (!search && !start && !end) {
            setTutors(initialTutors);
            return;
        }

        searchTutors(search, start, end);
    };

    // Scroll + Filter Animation
    const transitions = useTransition(tutors, {
        keys: (tutor) => tutor._id,
        from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
        leave: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        trail: 80,
    });

    return (
        <>
            <div className="text-center mb-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                    Our Best Tutors
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-3">
                    Find experienced tutors for Class 6 to 12, SSC, HSC &
                    Medical Admission
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-5 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-3 md:gap-10 items-center px-4">
                    <div className="relative w-full md:col-span-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="w-5 h-5" />
                        </div>

                        <input
                            type="text"
                            placeholder="Search tutor..."
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full border pl-10 py-2 rounded-xl"
                        />
                    </div>

                    <div className="lg:flex items-center justify-between gap-4 hidden">
                        <span className="text-foreground w-20 hidden lg:block">
                            Start Date
                        </span>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                handleDateChange(e.target.value, endDate)
                            }
                            className="border p-2 rounded-xl"
                        />
                    </div>

                    <div className="lg:flex items-center justify-between gap-4 hidden">
                        <span className="text-foreground w-20 hidden lg:block">
                            End Date
                        </span>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                handleDateChange(startDate, e.target.value)
                            }
                            className="border p-2 rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Animated Tutors Grid */}
            {tutors.length > 0 ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
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
                        onClick={() => handleSearch("")}
                        className="mt-4 text-primary hover:underline cursor-pointer"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </>
    );
};

export default TutorClient;
