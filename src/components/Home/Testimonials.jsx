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
            class: "Class 12, Chittagong",
            subject: "Biology (Medical Admission)",
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
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-foreground mb-3">
                        What Our Students Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Real stories from students across Bangladesh (Class 6 to
                        12 & Admission Batch)
                    </p>
                </div>

                {/* Marquee Testimonials */}
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
                                className="mx-4 w-95 bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {Array.from({ length: item.rating }).map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-current"
                                            />
                                        ),
                                    )}
                                </div>

                                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                                <p className="text-foreground leading-relaxed mb-6 line-clamp-3">
                                    {item.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.class} • {item.subject}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Second Row - Opposite Direction */}
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
                                className="mx-4 w-95 bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {Array.from({ length: item.rating }).map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-current"
                                            />
                                        ),
                                    )}
                                </div>

                                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                                <p className="text-foreground leading-relaxed mb-6 line-clamp-3">
                                    {item.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
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
