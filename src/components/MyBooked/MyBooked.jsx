"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import DeleteTutorSession from "./DeleteTutorSession";
import Canceled from "./Canceled";

const MyBooked = ({ myBooked }) => {
    const tutors = myBooked || [];
    // console.log(tutors);
    return (
        <>
            {tutors.length > 0 ? (
                <div className="space-y-4 p-2 sm:p-4 md:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-foreground">
                            My Booked Sessions
                        </h2>
                        <p className="bg-primary text-primary-foreground px-4 py-1.5">
                            Total Sessions: {tutors.length}
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
                                                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
                                                    Tutor Name
                                                </p>
                                                <p className="text-lg font-semibold text-foreground flex items-center gap-1">
                                                    {tutor.tutorName}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Institution */}
                                        <div className="min-w-40">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Student Name
                                            </p>
                                            <p className="text-foreground font-medium">
                                                {tutor.studentName}
                                            </p>
                                        </div>

                                        {/* Teaching Mode */}
                                        <div className="min-w-25">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Email
                                            </p>
                                            <p className="text-foreground font-medium">
                                                {tutor.studentEmail}
                                            </p>
                                        </div>

                                        {/* Fee */}
                                        <div className="min-w-32.5">
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                                Status
                                            </p>
                                            <p className="font-mediam text-foreground">
                                                {tutor.status ? (
                                                    <span className="text-green-500">
                                                        Booked
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500">
                                                        Canceled
                                                    </span>
                                                )}
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <Canceled tutor={tutor}></Canceled>
                                            <DeleteTutorSession
                                                tutor={tutor}
                                            ></DeleteTutorSession>
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
                            No Tutors Sessions Found
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Start by adding your first tutor session
                        </p>
                        <Link href="/tutors">
                            <Button
                                className="hover-primary cursor-pointer"
                                size="lg"
                            >
                                Add New Tutor Session
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default MyBooked;
