import { cn } from "@/lib/utils";
import React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				"w-full bg-gray-50  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-xl p-6 border",
				className
			)}
		>
			{children}
		</div>
	);
}
