import Login from "@/components/Auth/Login";

export const metadata = {
    title: "MediQueue - Login",
    description:
        "Best website for student and tutor booking system almost free",
};

const page = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default page;
