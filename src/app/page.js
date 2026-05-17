import Navbar from "@/components/Home/Navbar";


export default function Home() {
	return (

		<div className="container mx-auto">
			<Navbar />

			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="text-4xl font-bold">Welcome to MediQueue</h1>
				<p className="mt-4 text-lg text-gray-600">
					Your one-stop solution for managing medical appointments and queues.
				</p>
			</main>
		</div>
	);
}
