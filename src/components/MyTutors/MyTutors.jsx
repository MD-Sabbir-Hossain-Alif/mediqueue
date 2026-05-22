"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import UpdateTutor from "./UpdateTutor";
import DeleteTutor from "./DeleteTutor";

const MyTutors = ({ myTutors }) => {
    const tutors = myTutors || [];
    return (
        <>
            {tutors.length > 0 ? (
                <div className="space-y-4 p-2 sm:p-4 md:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-foreground">
                            My Tutors
                        </h2>
                        <p className="bg-primary text-primary-foreground px-4 py-1.5">
                            Total: {tutors.length}
                        </p>
                    </div>

                    {/* Tutor Cards */}
                    <div className="space-y-4">
                        {tutors.map((tutor) => (
                            <Card
                                key={tutor._id}
                                className="bg-card border border-border hover:border-primary/50 transition-all duration-200"
                            >
                                <CardContent>
                                    <div className="flex items-center justify-between flex-wrap gap-6">
                                        {/* Name & Subject */}
                                        <div className="flex items-center gap-4 min-w-64">
                                            <Avatar className="w-12 h-12 sm:w-15 sm:h-15 border-2 border-background shadow-2xl ring-2 ring-primary/20">
                                                <AvatarImage
                                                    src={tutor.photo}
                                                    alt={tutor.tutorName}
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="text-4xl font-bold">
                                                    {tutor.tutorName.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold text-foreground text-lg">
                                                    {tutor.tutorName}
                                                </p>
                                                <p className="text-lg text-muted-foreground flex items-center gap-1">
                                                    📚 {tutor.subjectCategory}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Institution */}
                                        <div className="min-w-40">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Institution
                                            </p>
                                            <p className="text-foreground font-medium">
                                                {tutor.institution}
                                            </p>
                                        </div>

                                        {/* Teaching Mode */}
                                        <div className="min-w-25">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Online/Offline
                                            </p>
                                            <Badge
                                                className={`font-medium ${
                                                    tutor.teachingMode ===
                                                    "Online"
                                                        ? "bg-secondary text-secondary-foreground hover:bg-secondary"
                                                        : tutor.teachingMode ===
                                                            "Both"
                                                          ? "bg-primary text-primary-foreground hover:bg-primary"
                                                          : "bg-accent text-accent-foreground hover:bg-accent"
                                                }`}
                                            >
                                                {tutor.teachingMode}
                                            </Badge>
                                        </div>

                                        {/* Fee */}
                                        <div className="min-w-32.5">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Fee / Hour
                                            </p>
                                            <p className="text-xl font-semibold text-foreground">
                                                ৳{tutor.hourlyFee}
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <UpdateTutor tutor={tutor} />
                                            <DeleteTutor
                                                tutor={tutor}
                                            ></DeleteTutor>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-[#1e3a4d] rounded-xl">
                        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                            <User className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                            No Tutors Found
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Start by adding your first tutor
                        </p>
                        <Link href="/add-tutor">
                            <Button
                                className="hover-primary cursor-pointer"
                                size="lg"
                            >
                                Add New Tutor
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default MyTutors;
