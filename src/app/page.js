import Banner from "@/components/Home/Banner";

export default function Home() {
	return (
		<main>
			<Banner />
			<section className="py-16">
				<h2 className="text-3xl font-bold text-center mb-8">
					Welcome to MediQueue
				</h2>
				<p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
					Discover the best tutors for your medical studies. Whether you need help with anatomy, physiology, pharmacology, or any other subject, our platform connects you with experienced tutors who can guide you to success. Start your learning journey with MediQueue today!
				</p>
			</section>
		</main>
	);
}
