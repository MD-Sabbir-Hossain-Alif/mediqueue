// dns for server error
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Home/Navbar";

export const metadata = {
	title: " MediQueue - Tutor Booking System",
	description: "Bast website for student and tutor booking system almost free",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Navbar />
					<main className="container mx-auto min-h-full flex flex-col">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}