import TutorDetailsPage from "@/components/Tutors/TutorDetails";

const page = async ({ params }) => {
    const { id } = await params;
    // console.log("Tutor ID:", id); // Debugging log
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/tutors/${id}`,
    );
    const tutor = await res.json();
    // console.log(tutor)
    return (
        <div>
            <TutorDetailsPage tutor={tutor} />
        </div>
    );
};

export default page;
