import { ToggleTheme } from "@/components/my/toggle-theme";
import { NavBack } from "./nav-back";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="pt-[30px] mb-12 md:pt-[70px] mx-auto px-4 md:px-6 lg:px-[5vw] ">
			<nav className="flex justify-between">
				<NavBack />
				<ToggleTheme className="border" />
			</nav>
			<main className="mt-7">{children}</main>
		</div>
	);
}
