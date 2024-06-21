import { Navbar } from "@/components/my/navbar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 mt-[var(--margin-navbar)]">{children}</main>
		</>
	);
}
