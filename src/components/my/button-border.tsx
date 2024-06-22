"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MousePointerIcon } from "lucide-react";

export function ButtonBorder({ text }: { text: string }) {
	return (
		<HoverBorderGradient
			containerClassName="rounded-full mx-auto mt-10"
			as="button"
			className="dark:bg-black bg-white text-black py-3 px-5 dark:text-white flex items-center space-x-2"
		>
			<span className="font-bold">{text}</span>
			<MousePointerIcon
				width={18}
				height={18}
			/>
		</HoverBorderGradient>
	);
}
