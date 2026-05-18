// components/TutorCard.tsx
"use client";

import Image from "next/image";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TutorCard({ tutor }) {
    console.log(tutor);
    return (
        <Card className="group overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="px-5">
                <div className="relative h-90 w-full overflow-hidden rounded-2xl">
                    <Image
                        src={tutor.photo}
                        alt={tutor.tutorName}
                        width={500}
                        height={600}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant="secondary"
                            className="bg-white/90 text-black font-medium"
                        >
                            {tutor.teachingMode}
                        </Badge>
                    </div>

                    <div className=" absolute left-0 bottom-0 bg-white/70 dark:bg-black/70 text-white p-2 rounded-tr-2xl rounded-bl-2xl">
                        <h3 className="text-xl font-semibold text-foreground">
                            {tutor.tutorName}
                        </h3>
                        <p className="text-primary font-medium">
                            {tutor.subjectCategory}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaLocationDot className="w-4 h-4" />
                    <span>{tutor.location}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4 text-muted-foreground" />
                        <span>{tutor.availableDays}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4 text-muted-foreground" />
                        <span>{tutor.availableTimeSlot}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0">
                <Link href={`/tutors/${tutor._id}`} className="w-full">
                    <Button className="w-full font-medium" size="lg">
                        Book Session
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
