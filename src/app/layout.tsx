import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/my/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DAVID",
	description: "ready remote backend, frontend, fullstack",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + " overflow-x-hidden"}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />

					<main className="max-w-7xl mx-auto px-4 mt-[var(--margin-navbar)]">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
