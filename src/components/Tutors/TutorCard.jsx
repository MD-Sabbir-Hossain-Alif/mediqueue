import Image from "next/image";
import { FaCalendar, FaClock, FaGraduationCap } from "react-icons/fa6";
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
        institution,
        availableDays,
        availableTimeSlot,
        totalSlot,
    } = tutor;
    return (
        <Card className="group overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="px-5">
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                    <Image
                        src={photo}
                        alt={tutorName}
                        fill
                        loading="eager"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                        <Badge
                            variant="secondary"
                            className={`bg-[#60a5fa] font-medium py-2 ${
                                teachingMode === "Online"
                                    ? "bg-secondary text-secondary-foreground hover:bg-secondary"
                                    : teachingMode === "Both"
                                      ? "bg-primary text-primary-foreground hover:bg-primary"
                                      : "bg-accent text-accent-foreground hover:bg-accent"
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

            <CardContent className="space-y-2">
                <div>
                    <h3 className="text-xl font-semibold text-foreground">
                        {tutorName}
                    </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaGraduationCap className="w-4 h-4" />
                    <span>{institution}</span>
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

            <CardFooter className="sm:p-5 pt-0 bg-transparent">
                <Link href={`/tutors/${_id}`} className="w-full">
                    <Button
                        className="w-full text-lg transition-all duration-300 font-medium py-6
                                bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                    >
                        {totalSlot === 0 ? (
                            <span className="text-red-300 dark:text-red-800">
                                No available slots left
                            </span>
                        ) : (
                            "Book Session"
                        )}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
