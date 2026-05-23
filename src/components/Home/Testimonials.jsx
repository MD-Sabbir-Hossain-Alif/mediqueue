"use client";

import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ayesha Khan",
            class: "Class 10, Rangpur",
            subject: "Math & Science",
            text: "Mediqueue helped me improve my Math grade from B to A+ in just 2 months. The tutor was very patient and explained everything clearly.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?u=ayesha",
        },
        {
            name: "Rahim Sheikh",
            class: "HSC 1st Year, Dhaka",
            subject: "Physics & Chemistry",
            text: "Best platform for admission test preparation. My Physics tutor is amazing. Highly recommended for science students!",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?u=rahim",
        },
        {
            name: "Samiul Islam",
            class: "Class 8, Sylhet",
            subject: "English & Bangla",
            text: "I was weak in English. Now I feel confident after taking regular classes. The tutors are very friendly.",
            rating: 4,
            avatar: "https://i.pravatar.cc/150?u=samiul",
        },
        {
            name: "Nadia Akter",
            class: "HSC 26, Chittagong",
            subject: "(Medical Admission)",
            text: "Got excellent guidance for medical admission test. The mock tests and doubt clearing sessions are very helpful.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?u=nadia",
        },
        {
            name: "Fahim Ahmed",
            class: "Class 9, Khulna",
            subject: "All Subjects",
            text: "My parents are very happy with my progress. The flexibility of timing is the best part.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?u=fahim",
        },
    ];

    return (
        <section className="py-10 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto sm:px-4">
                {/* Heading */}
                <div className="text-center mb-10 px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                        What Our Students Say
                    </h2>

                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Real stories from students across Bangladesh (Class 6 to
                        12 & Admission Batch)
                    </p>
                </div>

                {/* Marquee Row 1 */}
                <div className="relative">
                    <Marquee
                        gradient={false}
                        speed={35}
                        pauseOnHover={true}
                        className="py-4"
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="mx-3 sm:mx-4 w-65 sm:w-75 md:w-90 lg:w-105  
                                bg-card border border-border rounded-3xl p-5 sm:p-6 md:p-8 
                                shadow-sm hover:shadow-md transition-all"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {Array.from({ length: item.rating }).map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                                            />
                                        ),
                                    )}
                                </div>

                                {/* Quote icon */}
                                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-4" />

                                {/* Text */}
                                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                                    {item.text}
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20"
                                    />

                                    <div>
                                        <p className="font-semibold text-sm sm:text-base text-foreground">
                                            {item.name}
                                        </p>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            {item.class} • {item.subject}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Marquee Row 2 */}
                <div className="mt-6">
                    <Marquee
                        gradient={false}
                        speed={30}
                        direction="right"
                        pauseOnHover={true}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="mx-3 sm:mx-4 w-65 sm:w-75 md:w-90 lg:w-105 
                                bg-card border border-border rounded-3xl p-5 sm:p-6 md:p-8 
                                shadow-sm hover:shadow-md transition-all"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {Array.from({ length: item.rating }).map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                                            />
                                        ),
                                    )}
                                </div>

                                {/* Quote */}
                                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-4" />

                                {/* Text */}
                                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                                    {item.text}
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20"
                                    />

                                    <div>
                                        <p className="font-semibold text-sm sm:text-base text-foreground">
                                            {item.name}
                                        </p>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            {item.class} • {item.subject}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
