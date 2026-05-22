import Fetured from "./Fetured";

const FeturedApiCall = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/featured`);
    const tutors = await res.json();
    return <Fetured tutors={tutors}></Fetured>;
};

export default FeturedApiCall;
