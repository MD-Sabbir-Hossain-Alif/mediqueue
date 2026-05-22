import MyBooked from "@/components/MyBooked/MyBooked";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async () => {
    const { user } = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log(user);
    const userId = user?.id;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/booked`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();

    const myBooked = data.filter((booked) => booked.studentId === userId);
    // console.log(myBooked);
    return (
        <div>
            <MyBooked myBooked={myBooked} />
        </div>
    );
};

export default page;
