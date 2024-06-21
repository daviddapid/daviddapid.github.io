"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavBack() {
	const { back } = useRouter();
	return (
		<button
			onClick={back}
			className="flex items-center gap-2 "
		>
			<ArrowLeft /> Back
		</button>
	);
}
