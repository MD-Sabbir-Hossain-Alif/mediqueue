import TutorClient from "@/components/Tutors/TutorClient";

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/tutors`);
    const tutors = await res.json();
    // console.log(tutors);
    return (
        <div>
            <TutorClient tutors={tutors} />
        </div>
    );
};

export default page;
