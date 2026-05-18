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
    // console.log(tutor);

    const {
        _id,
        photo,
        tutorName,
        subjectCategory,
        teachingMode,
        location,
        availableDays,
        availableTimeSlot,
    } = tutor;
    return (
        <Card className="group overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="px-5">
                <div className="relative max-h-88 h-full w-full overflow-hidden rounded-2xl">
                    <Image
                        src={photo}
                        alt={tutorName}
                        width={500}
                        height={350}
                        loading="eager"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant="secondary"
                            className={`bg-[#60a5fa] text-black font-medium py-2 ${
                                teachingMode === "Online"
                                    ? "bg-[#34d399]"
                                    : teachingMode === "Offline"
                                      ? ""
                                      : "bg-[#22d3ee]"
                            }`}
                        >
                            {teachingMode}
                        </Badge>
                    </div>

                    <div className=" absolute left-1 bottom-1 bg-white/80 dark:bg-black/80 text-white p-2 rounded-tr-2xl rounded-bl-2xl">
                        <p className="text-primary text-base font-bold">
                            {subjectCategory}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-foreground">
                        {tutorName}
                    </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaLocationDot className="w-4 h-4" />
                    <span>{location}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4 text-muted-foreground" />
                        <span>{availableDays}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4 text-muted-foreground" />
                        <span>{availableTimeSlot}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 bg-transparent">
                <Link href={`/tutors/${_id}`} className="w-full">
                    <Button
                        className="w-full text-lg transition-all duration-300 font-medium py-6
                                bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                    >
                        Book Session
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
