import TutorClient from "@/components/Tutors/TutorClient";

export const metadata = {
    title: "MediQueue - Tutors",
    description:
        "Best website for student and tutor booking system almost free",
};

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/tutors`);
    const tutors = await res.json();
    // console.log(tutors);
    return (
        <div className="my-4 md:my-10">
            <TutorClient tutors={tutors} />
        </div>
    );
};

export default page;
