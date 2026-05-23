import {
    FaCalendar,
    FaClock,
    FaLocationDot,
    FaAward,
    FaStar,
    FaShieldHalved,
    FaBolt,
    FaChalkboardUser,
    FaUsers,
} from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BookedModal from "./BookedModal";
import ExpiredDialog from "./ExpiredDialog";

export default function TutorDetailsPage({ tutor }) {
    const {
        tutorName,
        photo,
        subjectCategory,
        availableDays,
        availableTimeSlot,
        hourlyFee,
        totalSlot,
        sessionStartDate,
        sessionEndDate,
        institution,
        experience,
        location,
        teachingMode,
        description,
        // fallbacks for optional fields
        totalStudents = 128,
        rating = 4.9,
        reviewCount = 47,
    } = tutor;

    const startDate = new Date(sessionStartDate).toISOString().split("T")[0];
    const endDate = new Date(sessionEndDate).toISOString().split("T")[0];
    const checkExpired = new Date() >= new Date(sessionEndDate);
    // console.log(sessionExpired);

    return (
        <div className="min-h-[90vh] bg-background">
            {/* ── Hero Banner ── */}
            <div className="relative bg-linear-to-br from-primary/15 via-primary/5 to-secondary/20 pt-8 pb-18 sm:pb-24 overflow-hidden">
                {/* decorative blobs */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-secondary/20 blur-2xl" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-end">
                        {/* ── Avatar ── */}
                        <div className="shrink-0">
                            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-background shadow-2xl ring-2 ring-primary/20">
                                <AvatarImage
                                    src={photo}
                                    alt={tutorName}
                                    className="object-cover"
                                />
                                <AvatarFallback className="text-4xl font-bold">
                                    {tutorName?.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        {/* ── Info right of avatar ── */}
                        <div className="flex-1 text-center sm:text-left space-y-1">
                            {/* Name */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                                {tutorName}
                            </h1>

                            {/* Subject */}
                            <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                                📚 {subjectCategory}
                            </p>
                            {/* Institution */}
                            <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                                🎓
                                {institution}
                            </p>

                            {/* ── Stat pills ── */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
                                <StatPill
                                    icon={<FaStar className="text-amber-400" />}
                                    value={rating}
                                    label={`(${reviewCount} reviews)`}
                                />
                                <StatPill
                                    icon={<FaUsers className="text-primary" />}
                                    value={totalStudents}
                                    label="Students"
                                />
                                <StatPill
                                    icon={
                                        <FaChalkboardUser className="text-primary" />
                                    }
                                    value={experience}
                                    label=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Grid ── */}
            <div className="container mx-auto px-4 sm:px-6 -mt-14 sm:-mt-16 relative z-10 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {/* ── Left / Main ── */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* About */}
                        <Card className="shadow-md">
                            <CardHeader className="flex items-center justify-center flex-wrap sm:justify-between gap-4">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <FaAward className="text-primary" />
                                    About Tutor
                                </CardTitle>
                                {/* Location */}
                                <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                                    <FaLocationDot className="text-primary shrink-0" />
                                    {location}
                                </p>
                            </CardHeader>
                            <CardContent className="text-[16px] leading-relaxed text-foreground/85">
                                {description}
                            </CardContent>
                        </Card>

                        {/* Trust badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: <FaStar className="text-amber-500" />,
                                    label: "Top Rated",
                                    sub: "Highly reviewed",
                                },
                                {
                                    icon: (
                                        <FaShieldHalved className="text-primary" />
                                    ),
                                    label: "Verified Tutor",
                                    sub: "ID & credentials checked",
                                },
                                {
                                    icon: <FaBolt className="text-green-500" />,
                                    label: "Fast Response",
                                    sub: "Within 2 hours",
                                },
                            ].map(({ icon, label, sub }) => (
                                <Card key={label} className="shadow-sm">
                                    <CardContent className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 text-lg">
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">
                                                {label}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {sub}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* ── Right / Sidebar ── */}
                    <div className="space-y-5">
                        {/* Booking card */}
                        <Card className="shadow-lg sticky top-6">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-primary">
                                    ৳{hourlyFee}
                                    <span className="text-sm font-normal text-muted-foreground">
                                        {" "}
                                        / hour
                                    </span>
                                </CardTitle>
                                {/* Subject & mode badges */}
                            </CardHeader>

                            <div className="absolute top-4 right-4">
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

                            <CardContent className="space-y-5">
                                <div className="space-y-4">
                                    <DetailRow
                                        icon={<FaCalendar />}
                                        label="Available Days"
                                        value={availableDays}
                                    />
                                    <DetailRow
                                        icon={<FaClock />}
                                        label="Time Slot"
                                        value={availableTimeSlot}
                                    />
                                    <DetailRow
                                        icon={<FaCalendar />}
                                        label="Session Start/End Date"
                                        value={`${startDate} / ${endDate}`}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-lg text-muted-foreground">
                                        Slots
                                    </p>
                                    <span className="text-lg font-bold text-foreground">
                                        {totalSlot}
                                    </span>
                                </div>

                                {checkExpired ? (
                                    <ExpiredDialog
                                        tutor={tutor}
                                    ></ExpiredDialog>
                                ) : (
                                    <BookedModal tutor={tutor}></BookedModal>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Stat pill used in hero ── */
function StatPill({ icon, value, label }) {
    return (
        <div className="flex items-center gap-1.5 bg-background/70 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-sm shadow-sm">
            {icon}
            <span className="font-semibold">{value}</span>
            <span className="text-muted-foreground">{label}</span>
        </div>
    );
}

/* ── Detail row used in sidebar ── */
function DetailRow({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 text-primary">
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-sm font-medium leading-none">{label}</p>
                <p className="text-sm text-muted-foreground mt-1 truncate">
                    {value}
                </p>
            </div>
        </div>
    );
}
