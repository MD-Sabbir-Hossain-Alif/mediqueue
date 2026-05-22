import { auth } from "@/lib/auth";


const { token } = await auth.api.getToken({
    headers: await headers(),
});

export const updateTutors = async (id,) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/tutors/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify(formattedData),
        },
    );
    const data = await res.json();
    console.log(data)
}

export const getbooked = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/booked`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
}