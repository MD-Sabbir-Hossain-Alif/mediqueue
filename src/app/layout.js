// dns for server error
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Home/theme-provider";
import Navbar from "@/components/Home/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Home/Footer";

export const metadata = {
	title: " MediQueue - Tutor Booking System",
	description: "Best website for student and tutor booking system almost free",
};

const dmsans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});


export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
			<body className={dmsans.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Navbar />
					<main className="container mx-auto min-h-full flex flex-col">
						{children}
					</main>
					<Footer />
					<Toaster position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}