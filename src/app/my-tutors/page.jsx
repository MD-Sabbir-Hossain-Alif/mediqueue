import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyTutors from "@/components/MyTutors/MyTutors";

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { user } = session || {};
    const id = user?.id;

    // console.log("Session Data:", session);
    // console.log("User ID:", id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/tutors`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    // console.log("Tutors Data:", data);

    const myTutors = data.filter((tutor) => tutor.userId === id);
    // console.log("My Tutors:", myTutors);

    return (
        <div>
            <MyTutors myTutors={myTutors} />
        </div>
    );
};

export default page;
