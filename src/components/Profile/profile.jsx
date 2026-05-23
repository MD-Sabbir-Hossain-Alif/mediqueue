import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Profile = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { user } = session || {};

    // console.log(user?.id);
    return (
        <div className="max-w-6xl mx-auto min-h-[90vh] px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
                My Profile
            </h1>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <Card className="lg:col-span-1 bg-card border-border dark:bg-black/30!">
                    <CardHeader className="text-center">
                        <div className="mx-auto w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                            <User className="w-10 sm:w-14 h-10 sm:h-14 text-primary" />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-semibold mt-4">
                            {user?.name || "Name"}
                        </h2>

                        <Badge variant="secondary" className="mt-1 mx-auto">
                            Student
                        </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4 text-center">
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ">
                            <div>
                                <p className="text-muted-foreground">
                                    Member Since
                                </p>
                                <p className="font-medium">
                                    {user?.memberSince || 2026}
                                </p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Student ID
                                </p>
                                <p className="font-medium text-foreground uppercase">
                                    {user?.id?.slice(-10) || "ID"}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Details */}
                <Card className="lg:col-span-2 bg-card border-border dark:bg-black/30!">
                    <CardHeader>
                        <h3 className="text-lg sm:text-xl font-semibold">
                            Personal Information
                        </h3>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <p className=" text-muted-foreground">
                                    Full Name
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.name}
                                </p>
                            </div>

                            <div>
                                <p className=" text-muted-foreground">
                                    Email Address
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.email}
                                </p>
                            </div>

                            <div>
                                <p className=" text-muted-foreground">
                                    Phone Number
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.phone || "01300386800"}
                                </p>
                            </div>

                            <div>
                                <p className=" text-muted-foreground">
                                    Location
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.location || "Rangpur"}
                                </p>
                            </div>

                            <div>
                                <p className=" text-muted-foreground">
                                    Date of Birth
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.dateOfBirth || "10/11/2006"}
                                </p>
                            </div>

                            <div>
                                <p className=" text-muted-foreground">
                                    Verified
                                </p>
                                <p className="font-medium text-foreground">
                                    {user?.emailVerified ? "Yes" : "No"}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
