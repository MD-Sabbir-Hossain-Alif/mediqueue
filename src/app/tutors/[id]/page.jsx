import TutorDetailsPage from "@/components/Tutors/TutorDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async ({ params }) => {
    const { id } = await params;
    // console.log("Tutor ID:", id); // Debugging log

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    // console.log(token);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/tutors/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
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
