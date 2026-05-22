import Banner from "@/components/Home/Banner";
import FeturedApiCall from "@/components/Home/FeturedApiCall";
import Testimonials from "@/components/Home/Testimonials";
import Welcome from "@/components/Home/Welcome";

export default function Home() {

	return (
		<>
			<Banner />
			<Welcome />
			<FeturedApiCall />
			<Testimonials />
		</>
	);
}
