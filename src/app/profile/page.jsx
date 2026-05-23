import Profile from "@/components/Profile/profile";
import React from "react";

export const metadata = {
    title: "MediQueue - Profile",
    description:
        "Best website for student and tutor booking system almost free",
};

const page = () => {
    return (
        <div>
            <Profile />
        </div>
    );
};

export default page;
