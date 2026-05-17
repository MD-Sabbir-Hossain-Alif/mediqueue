// dns for server error
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
	title: " MediQueue - Tutor Booking System",
	description: "Bast website for student and tutor booking system almost free",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="min-h-full flex flex-col">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}