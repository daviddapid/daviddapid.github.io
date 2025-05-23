import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

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
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
			<GoogleAnalytics gaId="G-QXJKCNYFJH" />
		</html>
	);
}
