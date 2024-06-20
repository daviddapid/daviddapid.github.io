"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type props = { img: string; title: string; description: string; link?: string };

const projectVariants = {
	initial: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
	},
	tap: {
		opacity: 1,
	},
};

export function CardProject({ img, title, description, link }: props) {
	return (
		<div className="w-full h-full rounded-xl relative overflow-hidden border border-slate-300 dark:border-slate-600 shadow-md p-3 md:p-0 md:shadow-none">
			<Image
				src={img}
				alt={title}
				width={2000}
				height={2000}
				className="w-full h-[150px] object-cover md:h-full pointer-events-none rounded-xl "
			/>
			{/* show on mobile */}
			<div className="md:hidden mt-4">
				<p className="font-bold dark:text-slate-100">{title}</p>
				<p className="dark:text-slate-200">{description}</p>
				{link && (
					<LinkBorder
						href={link}
						className="rounded-xl w-fit border-slate-600 ml-auto"
					/>
				)}
			</div>

			{/* show on desktop */}
			<motion.div
				variants={projectVariants}
				initial="initial"
				whileHover="hover"
				className="bg-slate-800 z-10 bg-opacity-[0.5] backdrop-blur-[7px] absolute top-0 left-0 w-full h-full hidden justify-center items-center flex-col md:flex"
			>
				<p className="text-xl font-bold text-slate-100">{title}</p>
				<p className="text-slate-200">{description}</p>
				{link && (
					<LinkBorder
						href="jatimexpo.id"
						className="text-slate-200"
					/>
				)}
			</motion.div>
		</div>
	);
}

const LinkBorder = ({ href, className }: { href: string; className?: string }) => {
	return (
		<a
			href={href}
			className={cn("mt-5 border-white border px-3 py-2 flex gap-1", className)}
		>
			see website <EyeIcon className="w-4" />
		</a>
	);
};
