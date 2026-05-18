import TutorCard from "@/components/Tutors/TutorCard";
import React from "react";

const page = async () => {
    const res = await fetch("http://localhost:5000/tutors");
    const tutors = await res.json();
    // console.log(tutors);
    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-2xl font-bold ">Our Best Tutors</h1>
                <p className="text-gray-500 mt-2">
                    Meet our experienced and dedicated tutors who are here to
                    help you succeed.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
                {tutors.map((tutor) => (
                    <TutorCard key={tutor._id} tutor={tutor} />
                ))}
            </div>
        </div>
    );
};

export default page;
