"use client";
import Image from "next/image";
import { Variants, motion, useAnimate } from "framer-motion";
import { EyeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type props = { img: string; title: string; description: string; link?: string };

const projectVariants: Variants = {
	initial: {
		opacity: 0,
	},
	hover: {
		opacity: 1,
		pointerEvents: "auto",
	},
};
export function CardProject({ img, title, description, link }: props) {
	const [scope, animate] = useAnimate();

	function onTap() {
		animate(scope.current, projectVariants.hover);
		setTimeout(() => {
			animate(scope.current, projectVariants.initial);
		}, 2000);
	}

	return (
		<div className="w-full h-full ">
			<div
				className="relative w-full rounded-xl overflow-hidden md:h-full"
				onClick={onTap}
			>
				<Image
					src={img}
					alt={title}
					width={2000}
					height={2000}
					className="w-full object-cover md:h-full "
				/>
				<motion.div initial={{ pointerEvents: "none", opacity: 0 }}></motion.div>
				<motion.div
					variants={projectVariants}
					initial="initial"
					whileHover="hover"
					ref={scope}
					className="bg-zinc-800 z-10 bg-opacity-[0.5] backdrop-blur-[7px] absolute top-0 left-0 w-full h-full justify-center items-center flex-col flex pointer-events-none md:pointer-events-auto"
				>
					<p className="md:text-xl font-bold text-zinc-100">{title}</p>
					<p className="text-sm md:text-base text-zinc-200">{description}</p>
					{link && <LinkBorder href="jatimexpo.id" />}
				</motion.div>
			</div>

			{/* show on mobile */}
			<div className="md:hidden mt-2">
				<p className="font-bold dark:text-zinc-100">{title}</p>
				<p className="dark:text-zinc-200">{description}</p>
			</div>
		</div>
	);
}

const LinkBorder = ({ href, className }: { href: string; className?: string }) => {
	return (
		<a
			href={href}
			className={cn(
				"mt-5 text-neutral-50 border-neutral-50 border px-3 py-1.5 md:py-2 flex items-center gap-1.5 text-sm md:text-base",
				className
			)}
		>
			lihat website <EyeIcon className="w-4" />
		</a>
	);
};
