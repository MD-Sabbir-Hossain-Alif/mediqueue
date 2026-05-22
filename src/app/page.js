import Banner from "@/components/Home/Banner";
import Fetured from "@/components/Home/Fetured";
import Testimonials from "@/components/Home/Testimonials";
import Welcome from "@/components/Home/Welcome";

export default async function Home() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/featured`);
	const tutors = await res.json();
	console.log(tutors);
	return (
		<>
			<Banner />
			<Welcome />
			<Fetured tutors={tutors} />
			<Testimonials />
		</>
	);
}
