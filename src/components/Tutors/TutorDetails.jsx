"use client";

import {
    FaCalendar,
    FaClock,
    FaMapPin,
    FaAward,
    FaCalendar as DateIcon,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TutorDetailsPage({ tutor }) {
    // Tutor Data (In real app, fetch this using useEffect or params)
    const  {
        _id,
        tutorName,
        photo,
        subjectCategory,
        availableDays,
        availableTimeSlot,
        hourlyFee,
        totalSlot,
        sessionStartDate,
        sessionEndDate,
        institutionExperience,
        location,
        teachingMode,
        description,
    } = tutor;

    return (
        <div className="min-h-screen bg-background pb-16">
            {/* Hero Section */}
            <div className="relative h-105 bg-linear-to-br from-primary/10 to-secondary/30">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                <div className="container mx-auto px-6 pt-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-end">
                        <div className="relative -mb-16">
                            <Avatar className="w-40 h-40 border-4 border-background shadow-2xl">
                                <AvatarImage
                                    src={photo}
                                    alt={tutorName}
                                    className="object-cover"
                                />
                                <AvatarFallback className="text-4xl">
                                    AR
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="flex-1 pb-6">
                            <div className="flex flex-wrap gap-3 mb-3">
                                <Badge
                                    variant="default"
                                    className="text-base px-4 py-1"
                                >
                                    {subjectCategory}
                                </Badge>
                                <Badge variant="secondary">
                                    {teachingMode}
                                </Badge>
                            </div>

                            <h1 className="text-5xl font-bold text-foreground">
                                {tutorName}
                            </h1>
                            <p className="text-xl text-muted-foreground mt-2 flex items-center gap-2">
                                <FaMapPin className="text-primary" />{" "}
                                {location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-2xl">
                                    <FaAward className="text-primary" /> About
                                    Tutor
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-lg leading-relaxed text-foreground/90">
                                {description}
                            </CardContent>
                        </Card>

                        {/* Experience */}
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Qualifications & Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">
                                    {institutionExperience}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar - Booking Card */}
                    <div className="space-y-6">
                        <Card className="sticky top-6">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-primary">
                                    ৳{hourlyFee}
                                    <span className="text-base font-normal text-muted-foreground">
                                        {" "}
                                        / hour
                                    </span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                            <FaCalendar className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Available Days
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {availableDays}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                            <FaClock className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Time Slot
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {availableTimeSlot}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                            <DateIcon className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Session Period
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {sessionStartDate} —{" "}
                                                {sessionEndDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Available Slots
                                    </p>
                                    <p className="text-2xl font-semibold">
                                        {totalSlot} Sessions Left
                                    </p>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full text-lg py-7 hover-primary"
                                    onClick={() =>
                                        alert("Booking modal will open here")
                                    }
                                >
                                    Book Session Now
                                </Button>

                                <p className="text-center text-xs text-muted-foreground">
                                    Secure payment • Instant confirmation
                                </p>
                            </CardContent>
                        </Card>

                        {/* Quick Info */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="flex-1 text-center border-r">
                                        <p className="text-muted-foreground">
                                            Teaching Mode
                                        </p>
                                        <p className="font-semibold mt-1">
                                            {teachingMode}
                                        </p>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <p className="text-muted-foreground">
                                            Response Time
                                        </p>
                                        <p className="font-semibold mt-1 text-green-600">
                                            Within 2 hours
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
